// declarando variaveis
var redCircle = document.getElementById('red');
var yellowCircle = document.getElementById('yellow');
var greenCircle = document.getElementById('green');
var btnMudar = document.getElementById('btnMudar');
var cont = 0;
var flag = false;
var timer = undefined;

// variaveis de tempo

var tempRed = 10;
var tempYellow = 4;
var tempGreen = 15;

// fazendo as variaveis receber classList
redCircle.classList.add('grey');
yellowCircle.classList.add('grey');
greenCircle.classList.add('grey');

// declarando função para o click do botão
var iniciar = function() {
    // declarando intervalo de tempo
    timer = setInterval(function() {
        // incrementando ao contador de 1 em 1 segundo
       cont++;
       console.log(cont);
    //    condição para ligar o semáforo vermelho
       if(cont <= tempRed) {
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
       }else if(cont <= (tempRed + tempGreen)) {
            //    limpa o texto dentro da div red
           redCircle.innerText = "";
           //    remove class divRed na div red
           redCircle.classList.remove('divRed');
           //    adiciona class grey na div red
           redCircle.classList.add('grey');
           //    remove class grey na div yellow
           greenCircle.classList.remove('grey');
           //    adiciona class divYellow na div yellow
           greenCircle.classList.add('divGreen');
           //    condição para imprimir texto dentro da div yellow
           if((cont - tempRed) <= 9) {
               greenCircle.innerText = (`0${cont - tempRed}`);
            }else{
                greenCircle.innerText = (cont - tempRed);  
            };
    //    condição para ligar o semáforo verde
       }else if(cont <= (tempRed + tempYellow + tempGreen)) {
           //    limpa o texto na div yellow
           greenCircle.innerText = "";
           //    remove class divYellow na div yellow
           greenCircle.classList.remove('divGreen');
           //    adiciona class grey na div yellow
           greenCircle.classList.add('grey');
           //    remove class grey na div green
           yellowCircle.classList.remove('grey');
           //    adiciona class divGreen na div green
           yellowCircle.classList.add('divYellow');
           //    condição para imprimir texto dentro da div green
           if((cont - (tempRed + tempGreen)) <= 9) {
               yellowCircle.innerText = (`0${cont - (tempRed + tempGreen)}`);
            }else{
                yellowCircle.innerText = (cont - (tempRed + tempGreen));  
            };
    //    condição para resetar
       }else{
            //    zera contador
           cont = 1;
           //    remove class divGreen na div green
           yellowCircle.classList.remove('divYellow');
           //    adiciona class grey na div green
           yellowCircle.classList.add('grey');
           //    limpa texto dentro da div green
           yellowCircle.innerText = "";
           redCircle.classList.remove('grey');
           redCircle.classList.add('divRed');
           redCircle.innerText = (`0${cont}`);
        
       }
   }, 1000);
};

function manutencao () {
    clearInterval(timer);
}