class Validacion {
  constructor() {}

  inputValid(input, regex) {
    return input.match(regex) ? true : false;
  }
  validNames(value) {
    const nombresRx =
      /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    const resp = this.inputValid(value, nombresRx);
    return resp;
  }
  validMail(value) {
    const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    const resp = this.inputValid(value, mailRx);
    return resp;
  }

  validarForm = (object) => {
    const valores = Object.values(object);
    let resp = valores.findIndex(element => element === false);
    return resp;
  }
}

export { Validacion };
