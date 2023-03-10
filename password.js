var password = "admin";

 function passcheck() {
 if(document.getElementById('pass1').value != password) { 
 alert('Şifre Yanlış, Ana Sayfaya Yönlendirilyorsunuz!');
 window.location.replace("https://www.ardacoskun.dev");
 return false;
 }

 if (document.getElementById('pass1').value == password)
 {('Şifre doğru!');
 window.location.href = "http://www.ardacoskun.dev/admin";
 return false;
 }
 }