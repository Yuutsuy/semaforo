var redCircle = document.getElementById('red');
var yellowCircle = document.getElementById('yellow');
var greenCircle = document.getElementById('green');
var btnMudar = document.getElementById('btnMudar');
var cont = 0;

redCircle.classList.add('grey');
yellowCircle.classList.add('grey');
greenCircle.classList.add('grey');

var mudar = function() {
   var timer = setInterval(function() {
       cont++;
       console.log(cont);
       if(cont <= 15) {
           
       }else if(cont <= 19) {
           console.log('yellowDentro');
       }else if(cont <= 39) {
           console.log('greenDentro');
       }else{
           cont = 0;
           console.log('Resete');
       }
   }, 500);
};