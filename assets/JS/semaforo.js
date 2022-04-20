// declarando variaveis
var redCircle = document.getElementById('red');
var yellowCircle = document.getElementById('yellow');
var greenCircle = document.getElementById('green');
var btnMudar = document.getElementById('btnMudar');
var pedCircle1 = document.getElementById('pedCircle1');
var pedCircle2 = document.getElementById('pedCircle2');
var cont = 0;
// flag usada no botão Iniciar
var flagSem = false;
// flag usada no botão Manutenção
var flag = false;
// variaveis definidas para utilizar nos setInterval dos botões
var timer = undefined;
var mudar = undefined;

// variaveis de tempo
var tempRed = 10;
var tempYellow = 4;
var tempGreen = 15;

// fazendo as variaveis receber classList
redCircle.classList.add('grey');
yellowCircle.classList.add('grey');
greenCircle.classList.add('grey');
pedCircle1.classList.add('grey');
pedCircle2.classList.add('grey');

// função do botão Iniciar
var iniciar = function() {
    // limpa o timer para evitar chamar o método do botão Iniciar mais de uma vez
    clearInterval(timer);
    // limpa o mudar para evitar chamar o método do botão Manutenção mais de uma vez
    clearInterval(mudar);
    yellowCircle.classList.remove('divYellow');
    yellowCircle.classList.add('grey');
    pedCircle1.classList.add('grey');
    pedCircle1.classList.remove('divRed');
    pedCircle2.classList.add('grey');
    pedCircle2.classList.remove('divGreen');
    // declarando intervalo de tempo
    timer = setInterval(function() {
        // incrementando ao contador de 1 em 1 segundo
       cont++;
       console.log(cont);
    //    condição para ligar e desligar o semáforo vermelho
       if(cont <= tempRed) {
            pedCircle1.classList.remove('divRed');
            pedCircle1.classList.add('grey');
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
           if(cont > (tempRed - 5)) {
               //   true
               if(!flagSem) {
                   flagSem = true;
                   pedCircle2.classList.add('grey');
                   pedCircle2.classList.remove('divGreen');
               }else{
                   flagSem = false;
                   pedCircle2.classList.remove('grey');
                   pedCircle2.classList.add('divGreen');
               }

           }else{
               pedCircle2.classList.remove('grey');
               pedCircle2.classList.add('divGreen');
           }
    //    condição para ligar e desligar o semáforo amarelo
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
            pedCircle2.classList.remove('divGreen');
            pedCircle2.classList.add('grey');
            pedCircle1.classList.remove('grey');
            pedCircle1.classList.add('divRed');
    //    condição para ligar e desligar o semáforo verde
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
           //    remove class divYellow na div yellow
           yellowCircle.classList.remove('divYellow');
           //    adiciona class grey na div yellow
           yellowCircle.classList.add('grey');
           //    limpa texto dentro da div yellow
           yellowCircle.innerText = "";
           redCircle.classList.remove('grey');
           redCircle.classList.add('divRed');
           redCircle.innerText = (`0${cont}`);
           pedCircle1.classList.remove('divRed');
           pedCircle1.classList.add('grey');
           pedCircle2.classList.remove('grey');
           pedCircle2.classList.add('divGreen');
       }
   }, 1000);
};

// função do botão Manutenção
function manutencao () {
    // limpa o mudar para evitar chamar o método do botão Manutenção mais de uma vez
    clearInterval(mudar);
    // limpa o timer para evitar chamar o método do botão Iniciar junto ao método Manutenção
    clearInterval(timer);
    cont = 0;
    // remove as alterações feitas no botão iniciar e volta ao padrão
    redCircle.classList.remove('divRed');
    yellowCircle.classList.remove('divYellow');
    greenCircle.classList.remove('divGreen');
    redCircle.classList.add('grey');
    yellowCircle.classList.add('grey');
    greenCircle.classList.add('grey');
    redCircle.innerText = "";
    yellowCircle.innerText = "";
    greenCircle.innerText = "";
    pedCircle1.classList.remove('divRed');
    pedCircle1.classList.add('grey');
    pedCircle2.classList.remove('divGreen');
    pedCircle2.classList.add('grey');
    // criado função com uma condição para o semáforo entrar em manutenção
    mudar = setInterval(function() {
        if(!flag) {
        flag = true;
            yellowCircle.classList.remove('grey');
            yellowCircle.classList.add('divYellow');
            pedCircle1.classList.remove('grey');
            pedCircle1.classList.add('divRed');
            pedCircle2.classList.remove('grey');
            pedCircle2.classList.add('divGreen');
        }else{
            flag = false;
            yellowCircle.classList.add('grey');
            yellowCircle.classList.remove('divYellow');
            pedCircle1.classList.add('grey');
            pedCircle1.classList.remove('divRed');
            pedCircle2.classList.add('grey');
            pedCircle2.classList.remove('divGreen');
        }
    }, 300);
};