var password = "admin";

function passcheck() {
if(document.getElementById('pass1').value != password) { 
alert('Şifre Yanlış, Tekrar Deneyin!');
return false;
}

if (document.getElementById('pass1').value == password) {
alert('Şifre doğru!');
}
}