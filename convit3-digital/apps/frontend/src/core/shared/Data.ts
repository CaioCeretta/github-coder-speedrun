export default class Data {
  /* Simplify the process of transforming a date to text and text to date */
  static formatar(data: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0")

    const d = data ?? new Date()
    const dia = pad(d.getDate())
    const ano = d.getFullYear()
    const mes = pad(d.getMonth() + 1)
    const hora = pad(d.getHours())
    const minuto = pad(d.getMinutes())

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`
  }

  static desformatar(data: string): Date {
    const [ano, mes, dia] = data.split("T")[0].split("-");
    const [hora, minuto] = data.split("T")[1].split(":")

    return new Date(
      parseInt(ano),
      parseInt(mes),
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    )
  }
}

// console.log(Data.desformatar('2024-11-19T21:51'))
console.log(Data.formatar(Data.desformatar('2024-11-19T21:51')))


