var password = "admin";

 function passcheck() {
 if(document.getElementById('pass1').value != password) { 
 alert('Şifre Yanlış, Ana Sayfaya Yönlendirilyorsunuz!');
 return false;
window.location.replace("https://www.ardacoskun.dev");
 }

 if (document.getElementById('pass1').value == password)
 {('Şifre doğru!');
 }
 }