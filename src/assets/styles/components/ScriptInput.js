document.getElementById('email').addEventListener('input', function() {
  campo = event.target;
  valid= document.getElementById('emailOK');
      
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test(campo.value)) {
    valid.innerText = "valid mail";
  } else {
    valid.innerText = "Please insert a valid mail";
  }
});