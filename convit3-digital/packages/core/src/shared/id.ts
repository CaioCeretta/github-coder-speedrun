import { v4 as uuid, validate } from 'uuid'

export default class Id {
  static novo(): string {
    /* toString(36) quer dizer que irá criar uma string com base em todas letras e numeros*/
    return uuid()
  }

  static valido(id: string): boolean {
    return validate(id)
  }

}

for(let i = 0; i < 100; i++) {
  console.log(Id.novo())
}
