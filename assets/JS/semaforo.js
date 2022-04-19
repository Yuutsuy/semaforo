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
           redCircle.classList.remove('grey');
           redCircle.classList.add('divRed');
           redCircle.innerText = (cont);
           if(cont <= 9) {
               redCircle.innerText = (`0${cont}`);
           }else{
            redCircle.innerText = (cont);  
           };
       }else if(cont <= 19) {
           redCircle.innerText = "";
           redCircle.classList.remove('divRed');
           redCircle.classList.add('grey');
           yellowCircle.classList.remove('grey');
           yellowCircle.classList.add('divYellow');
           if(cont - 15 <= 9) {
               yellowCircle.innerText = (`0${cont - 15}`);
            }else{
                yellowCircle.innerText = (cont - 15);  
            };
       }else if(cont <= 39) {
           yellowCircle.innerText = "";
           yellowCircle.classList.remove('divYellow');
           yellowCircle.classList.add('grey');
           greenCircle.classList.remove('grey');
           greenCircle.classList.add('divGreen');
           if(cont - 19 <= 9) {
               greenCircle.innerText = (`0${cont - 19}`);
            }else{
                greenCircle.innerText = (cont - 19);  
            };
       }else{
           cont = 0;
           greenCircle.classList.remove('divGreen');
           greenCircle.classList.add('grey');
           greenCircle.innerText = "";
       }
   }, 500);
};