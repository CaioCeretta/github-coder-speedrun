import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Data, eventos, Id, type Evento } from 'core';

@Controller('eventos')
export class EventosController {
  @Post('acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = eventos.find(
      (evento) => evento.id === dados.id && evento.senha === dados.senha,
    );

    if (!evento) {
      throw new Error('Senha não corresponde ao evento.');
    }

    return this.serializar(evento);
  }

  @Get()
  async buscarEventos() {
    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    const idValido = Id.valido(idOuAlias);

    if (idValido) {
      return this.serializar(eventos.find((evento) => evento.id === idOuAlias));
    } else {
      return this.serializar(
        eventos.find((evento) => evento.alias === idOuAlias),
      );
    }
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
    const evento = eventos.find((evento) => evento.alias === alias);

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
