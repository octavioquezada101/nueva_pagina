
const nombre = document.getElementById("nombre");
const apellidop = document.getElementById("apelpat");
const apellidom = document.getElementById("apelmat");
const rut = document.getElementById("rut");
/*const genero = document.getElementById("genero");*/
const direccion = document.getElementById("direccion");
const correo = document.getElementById("correo");
const fono = document.getElementById("fono");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });





  function validarSoloLetras(caracter) {
    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(caracter)) {
    return false;
    }
    return true;
    }
    
    
    
    var nombre = document.getElementById("nombre");
    
    if (nombre.value.length < 1 || nombre.value.trim() == "" || !validarSoloLetras(nombre.value)) {
    mostrarMensajeError("nombre", "Nombre no valido*");
    condicion = false;

    }
  if (apellidop.value.length < 1 || apellidop.value.trim() == ""|| !validarSoloLetras(nombre.value)) {
    mostrarMensajeError("apelpat", "Apellido no valido*");
    condicion = false;
  }
  if (apellidom.value.length < 1 || apellidom.value.trim() == ""|| !validarSoloLetras(nombre.value)) {
    mostrarMensajeError("apelmat", "Apellido no valido*");
    condicion = false;
  }



  var soloNumerosK = /^([0-9]+[kK]{0,1})$/;
  if (!soloNumerosK.test(rut.value)) {
  mostrarMensajeError("rut", "Rut no valido");
  condicion = false;
  }
  


  if (direccion.value.length < 1 || direccion.value.trim() == "") {
    mostrarMensajeError("direccion", "Direccion no valida*");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("correo", "Correo no valido*");
    condicion = false;
  }
  if (
    fono.value.length != 9 ||
    fono.value.trim() == "" ||
    isNaN(fono.value)
  ) {
    mostrarMensajeError("fono", "Celular no valido*");
    condicion = false;
  }

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}
return condicion;

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Registro Exitoso..!! Te enviaremos un mensaje por correo electronico!! ";
}

}