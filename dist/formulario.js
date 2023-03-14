import { Validacion } from "./Validacion.js";
const validacion = new Validacion();
const formulario = document.querySelector("#form");
const btn = document.getElementById("btnSend");

//Objeto validación
const formValid = {
    nombres: false,
    apellidos: true,
    mail: false,    
    politica: false
  };
  //Boton
btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(Object.keys(formValid));
    if (validacion.validarForm(formValid) === -1) {
      alert("Enviando FOrmulario");
      let datos = new FormData(document.querySelector("#form"));
      console.log(datos);
      const url = 'http://127.0.0.1/receiverForm/controlRegistro.php';
          //Verbos en un API son: get, post, put, delete .....}
          fetch(url,{
              method:'POST',
              body:datos
          })
          .then(response => response.status)
          .then(response => {
              alert('Respuesta ' + response);
          })
          .catch(error => console.log(" Error:"+error));   
    } else {
      alert("Campos inválidos");
    }
  });
  
  //Validacion de nombres
  formulario.addEventListener("change", (e) => {
    const inputId = e.target.id;
    console.log(inputId);
    const miValue = e.target.value;
    console.log(miValue);
    const miClass = e.target.classList;
    console.log(miClass);
    const validClass = () => {
      miClass.add("is-valid");
      miClass.remove("is-invalid");
    };
    const inValidClass = () => {
      miClass.remove("is-valid");
      miClass.add("is-invalid");
    };
  
    switch (inputId) {
      case "names":
        formValid.nombres = validacion.validNames(miValue);
        formValid.nombres ? validClass() : inValidClass(); //Ternario
        console.log(Object.values(formValid)); //Opcional
        break;
      case "mail":
        formValid.mail = validacion.validMail(miValue);
        formValid.mail ? validClass() : inValidClass(); //Ternario
        console.log(Object.values(formValid)); //Opcional
        break;     
      case "checkPolitica":
        if (e.target.checked) {
          formValid.politica = true;
        } else {
          formValid.politica = false;
        }
        console.log(Object.values(formValid)); //Opcional
        break;
    }
  });
  