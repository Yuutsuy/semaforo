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

// variaveis que podem ser mudadas
// variaveis de tempo
// o valor é o tempo dos tempos 
var tempRed = 10; 
var tempYellow = 4;
var tempGreen = 15;
const tempCooldawn = 2;

// variaveis de controle do botão de pedestres
var cooldawn = 0;
var reducaoTempSemVerde = 0;

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
       //console.log(cont);
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
    //    condição para ligar e desligar o semáforo verde
       }else if(cont <= (tempRed + (tempGreen - reducaoTempSemVerde))) {

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

            if(cooldawn === tempCooldawn){
                reducaoTempSemVerde++
            }

    //    condição para ligar e desligar o semáforo amarelo
       }else if(cont <= (tempRed + tempYellow + (tempGreen - reducaoTempSemVerde))) {

            // muda o sinal verde
           greenCircle.innerText = "";
           greenCircle.classList.remove('divGreen');
           greenCircle.classList.add('grey');
          
           
           yellowCircle.classList.remove('grey');
           yellowCircle.classList.add('divYellow');
        

           // verificação para impreção 
           if((cont - (tempRed + (tempGreen - reducaoTempSemVerde))) <= 9) {
               yellowCircle.innerText = (`0${cont - (tempRed + (tempGreen - reducaoTempSemVerde))}`);
            }else{
                yellowCircle.innerText = (cont - (tempRed + (tempGreen - reducaoTempSemVerde)));  
            };
    //    condição para resetar
       }else{
            //    zera contador
           cont = 1;
           
           // muda o sinal amarelo
           yellowCircle.classList.remove('divYellow');
           yellowCircle.classList.add('grey');
           yellowCircle.innerText = "";

           // muda o sinal vermelho
           redCircle.classList.remove('grey');
           redCircle.classList.add('divRed');
           redCircle.innerText = (`0${cont}`);

           // muda o semaforo do pedestre
           pedCircle1.classList.remove('divRed');
           pedCircle1.classList.add('grey');
           pedCircle2.classList.remove('grey');
           pedCircle2.classList.add('divGreen');

           // cooldawn pra controlar o botão do pedestre
           cooldawn--
           reducaoTempSemVerde = 0;
       }
   }, 1000);
};
/*
 -função do botão do pedestre-
    ele funciona quando clica, vai decrementando 1s sempre que entra na verificação do verde
*/ 
function pedestre(){
    if(cont >= (tempRed) && cont <= (tempRed + tempYellow + tempGreen) && cooldawn <= 0){
        //alert(`cooldawn${cooldawn}`);
        reducaoTempSemVerde = 1;
        cooldawn = tempCooldawn;
        //console.log(cooldawn);
    }
}

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
    }, 500);
};