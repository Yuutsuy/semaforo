// declarando variaveis
var redCircle = document.getElementById('red');
var yellowCircle = document.getElementById('yellow');
var greenCircle = document.getElementById('green');
var btnMudar = document.getElementById('btnMudar');
var cont = 0;

// fazendo as variaveis receber classList
redCircle.classList.add('grey');
yellowCircle.classList.add('grey');
greenCircle.classList.add('grey');

// declarando função para o click do botão
var mudar = function() {
    // declarando intervalo de tempo
    var timer = setInterval(function() {
        // incrementando ao contador de 1 em 1 segundo
       cont++;
       console.log(cont);
    //    condição para ligar o semáforo vermelho
       if(cont <= 15) {
            //    remove class grey na div red
           redCircle.classList.remove('grey');
           //    adicionando class grey na div red
           redCircle.classList.add('divRed');
           //    alterando texto dentro da div red
           redCircle.innerText = (cont);
           //    condição para imprimir texto dentro da div red
           if(cont <= 9) {
               redCircle.innerText = (`0${cont}`);
           }else{
                redCircle.innerText = (cont);  
           };
    //    condição para ligar o semáforo amarelo
       }else if(cont <= 19) {
            //    limpa o texto dentro da div red
           redCircle.innerText = "";
           //    remove class divRed na div red
           redCircle.classList.remove('divRed');
           //    adiciona class grey na div red
           redCircle.classList.add('grey');
           //    remove class grey na div yellow
           yellowCircle.classList.remove('grey');
           //    adiciona class divYellow na div yellow
           yellowCircle.classList.add('divYellow');
           //    condição para imprimir texto dentro da div yellow
           if(cont - 15 <= 9) {
               yellowCircle.innerText = (`0${cont - 15}`);
            }else{
                yellowCircle.innerText = (cont - 15);  
            };
    //    condição para ligar o semáforo verde
       }else if(cont <= 39) {
           //    limpa o texto na div yellow
           yellowCircle.innerText = "";
           //    remove class divYellow na div yellow
           yellowCircle.classList.remove('divYellow');
           //    adiciona class grey na div yellow
           yellowCircle.classList.add('grey');
           //    remove class grey na div green
           greenCircle.classList.remove('grey');
           //    adiciona class divGreen na div green
           greenCircle.classList.add('divGreen');
           //    condição para imprimir texto dentro da div green
           if(cont - 19 <= 9) {
               greenCircle.innerText = (`0${cont - 19}`);
            }else{
                greenCircle.innerText = (cont - 19);  
            };
    //    condição para resetar
       }else{
            //    zera contador
           cont = 0;
           //    remove class divGreen na div green
           greenCircle.classList.remove('divGreen');
           //    adiciona class grey na div green
           greenCircle.classList.add('grey');
           //    limpa texto dentro da div green
           greenCircle.innerText = "";
       }
   }, 1000);
};