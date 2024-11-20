export default class Id {


  static novo(): string {
    /* toString(36) quer dizer que irá criar uma string com base em todas letras e numeros*/
    return `${this.hash()}-${this.hash()}-${this.hash()}`
  }

  private static hash(): string  {
    return Math.random().toString(36).substring(2,15)
  }

}

console.log(Id.novo())
