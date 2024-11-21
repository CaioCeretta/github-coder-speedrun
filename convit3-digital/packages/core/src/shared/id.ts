import { v4 as uuid } from 'uuid'

export default class Id {
  static novo(): string {
    /* toString(36) quer dizer que irá criar uma string com base em todas letras e numeros*/
    return uuid()
  }

}
