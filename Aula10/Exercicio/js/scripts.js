var button = document.querySelector("#action-btn-LoginArea");
var LoginPopUp = document.querySelector("#LoginPopUp");

button.addEventListener('click', function () {

    if (LoginPopUp.style.display === 'block') {
        LoginPopUp.style.display = 'none';
    } else {
        LoginPopUp.style.display = 'block';
    }
});
/* area de login encerra */
/* campo de soma começa*/
var Somar = document.querySelector(".Somar")
var numero1 = document.getElementById('#numero1')
var numero2 = document.getElementById('#numero2')
var resultado
resultado = numero1 + numero2

Somar.addEventListener('click', function () {
    alert(resultado )
});