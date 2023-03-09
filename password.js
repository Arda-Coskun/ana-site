var password = "admin";

 function passcheck() {
 if(document.getElementById('pass1').value != password) { 
 alert('Şifre Yanlış, Ana Sayfaya Yönlendirilyorsunuz!');
 return false;
<meta http-equiv="refresh" content="0; URL=/"
 }

 if (document.getElementById('pass1').value == password)
 {('Şifre doğru!');
 }
 }