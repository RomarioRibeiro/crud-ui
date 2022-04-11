export class Regex {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  blockSpecial: RegExp = /^[\d-/.]$/;     // Libera somente números ponto barra e traço.
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  stringNumber: RegExp = /[\w\s]$/;       // Libera somente string e números.
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  // eslint-disable-next-line id-blacklist
  string = /[A-Za-z\s]/;          // Libera somente string e espaços
  numberEPonto = /^[\d.]$/;       // Libera somente números e ponto
  numberEVirgula = /^[\d,]$/;       // Libera somente números e virgula
  // eslint-disable-next-line id-blacklist
  number = /^[0-9]$/;          // Libera somente números sem espaço
  stringEspecial = /[A-Za-z\s\d-/.]/;
}
