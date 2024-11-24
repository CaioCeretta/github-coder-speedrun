import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  complementarConvidado,
  complementarEvento,
  Data,
  Id,
  type Convidado,
  type Evento,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repo: EventoPrisma) {}

  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = await this.repo.buscarPorAlias(evento.alias);

    if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
      throw new HttpException('Já existe um evento com esse alias.', 400);
    }

    /* One common thing is that the method that alters something, doesn't return anything, while the method that returns
    doesn't alter anything, so by persisting an event, we usually don't return what we saved, only return a status 200 */
    const eventoCompleto = complementarEvento(this.deserializar(evento));
    await this.repo.salvar(eventoCompleto);
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.repo.buscarPorAlias(alias);

    if (!evento) {
      throw new Error('Senha não corresponde ao evento.');
    }

    const convidadoCompleto = complementarConvidado(convidado);

    await this.repo.salvarConvidado(evento, convidadoCompleto);
  }

  @Post('acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = await this.repo.buscarPorId(dados.id);

    if (!evento) {
      throw new Error('Evento não encontrado.');
    }

    if (evento.senha !== dados.senha) {
      throw new HttpException('Senha não corresponde ao evento.', 400);
    }

    return this.serializar(evento);
  }

  @Get()
  async buscarEventos() {
    const eventos = await this.repo.buscarTodos();

    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    let evento: Evento;
    if (Id.valido(idOuAlias)) {
      evento = await this.repo.buscarPorId(idOuAlias, true);
    } else {
      evento = await this.repo.buscarPorAlias(idOuAlias, true);
    }

    return this.serializar(evento);
  }

  /* Here on this decorator we are passing in two attributes, the alias and the id, of the event, we are passing these two
  because if we are updating an event and eventually validate if the alias is valid or not, it may exist on the db, but it
  has to exist also in the id we are updating, the id and the alias have to be the same. If we have a alias that we chose
  with a different id that has already been registered on the db, it means that this alias is not valid.
  When we create a empty event in our app, we are already creating it with an id, so all events have the id created even
  before the data is being persisted. 
  We are testing first if there is an event with the same alias as the one being passed
  If there isn't an event with this alias, it will be valid but it will also check if we are with the alias matched with
  the right id, and we eventually will want to update the event or anything, this will also be a valid alias, because that
  id, is the owner of that alias.
  
  */

  @Get('/validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repo.buscarPorAlias(alias);

    return { valido: !evento || evento.id === id };
  }

  private serializar(evento: Evento) {
    if (!evento) {
      return null;
    }

    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }

  private deserializar(evento: any): Evento {
    if (!evento) {
      return null;
    }

    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
}
