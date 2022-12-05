class Alumno {
  constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
    this.promedio = this.promedio();
    this.condicion = this.condicion();
    this.obsequio = this.regalo();
  }
  promedio() {
    let res1 = this.nota1 * 0.15;
    let res2 = this.nota1 * 0.2;
    let res3 = this.nota1 * 0.25;
    let res4 = this.nota4 * 0.4;
    let resTotal = res1 + res2 + res3 + res4;
    return resTotal;
  }
  condicion() {
    if (this.promedio > 12) {
      let aprobado = "aprobado";
      return aprobado;
    }
    if (this.promedio <= 12) {
      let aprobado = "desaprobado";
      return aprobado;
    }
  }
  regalo() {
    if (this.promedio > 17) {
      return "una mochila de regalo";
    } else {
      return "si le metes mas ganas, talvez tenga una regalo para la proxima";
    }
  }
}

alumno1 = new Alumno("001", "Javier", "20", "18", "15", "14");
alumno2 = new Alumno("002", "Pedro", "11", "12", "12", "10");
alumno3 = new Alumno("003", "Rocio", "15", "18", "16", "12");

console.log(alumno1);

console.log(alumno2);

console.log(alumno3);
