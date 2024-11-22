import { Controller, Get, Param } from '@nestjs/common';
import { Data, eventos, Id, type Evento } from 'core';

@Controller('eventos')
export class EventosController {
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
