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
/* campo de calculo começa*/
var Somar = document.querySelector(".Somar")

Somar.addEventListener('click', function () {
    
var num1 = document.getElementById("numero1").value;
var num2 = document.getElementById("numero2").value;
var soma = Number(num1) + Number(num2) 
    alert(soma)
});
var Subtrair = document.querySelector(".Subtrair")

Subtrair.addEventListener('click', function () {
    
var num1 = document.getElementById("numero1").value;
var num2 = document.getElementById("numero2").value;
var subtrair = Number(num1) - Number(num2) 
    alert(subtrair)
});