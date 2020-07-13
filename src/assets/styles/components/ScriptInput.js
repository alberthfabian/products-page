// document.getElementById('email').addEventListener('input', () => {
//   // eslint-disable-next-line no-restricted-globals
//   campo = event.target;
//   valid = document.getElementById('emailOK');

//   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//   if (emailRegex.test(campo.value)) {
//     valid.innerText = 'valid mail';
//   } else {
//     valid.innerText = 'Please insert a valid mail';
//   }
// });

function validarCorreo(correo) {
  var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido = expReg.test(correo);
  if(esValido==true){
    alert('El correo electronico es valido');
  } else {
    alert('El correo electronico NO es valido');
  }
}

