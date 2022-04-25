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

// variaveis que podem ser alteradas
// variaveis de tempo
// o valor é o tempo dos tempos 
var tempRed = 10; 
var tempYellow = 4;
var tempGreen = 15;
const tempCooldawn = 2;

// variaveis de controle do botão de pedestres
var cooldawn = 0;
var reducaoTempSemVerde = 0;

// fazendo as variaveis (cores do semáforo) receber uma classe padrão(grey)
redCircle.classList.add('grey');
yellowCircle.classList.add('grey');
greenCircle.classList.add('grey');
pedCircle1.classList.add('grey');
pedCircle2.classList.add('grey');

// função do botão Iniciar
var iniciar = function() {
    // limpa o 'timer' para evitar chamar o método do botão Iniciar mais de uma vez
    clearInterval(timer);
    // limpa o 'mudar' para evitar chamar o método do botão Manutenção mais de uma vez
    clearInterval(mudar);
    // remove a classe (divYellow) da cor amarela do semáforo
    yellowCircle.classList.remove('divYellow');
    // adiciona a classe padrão(grey) a cor amarela do semáforo
    yellowCircle.classList.add('grey');
    // adiciona a classe de cor padrão(grey) a cor vermelha do semáforo de pedestre
    pedCircle1.classList.add('grey');
    // remove a classe divRed da cor vermelho do semáforo de pedestre
    pedCircle1.classList.remove('divRed');
    // adiciona a cor padrão(grey) ao semáforo do pedestre
    pedCircle2.classList.add('grey');
    // remove a classe divGreen da cor verde do semáforo do pedestre
    pedCircle2.classList.remove('divGreen');

    // declara intervalo de tempo
    timer = setInterval(function() {
        // incrementando 1 ao contador no intervalo de 1 segundo
       cont++;
       //console.log(cont);
      // condição para ligar e desligar a cor vermelho do semáforo
       if(cont <= tempRed) {
            // removen a classe divRed da cor vermelha do semáforo de pedestre
            pedCircle1.classList.remove('divRed');
            // adiciona a classe de cor padrão(grey) a cor vermelha do semáforo do pedestre
            pedCircle1.classList.add('grey');
            // remove a classe de cor padrão(grey) da cor vermelha do semáforo
           redCircle.classList.remove('grey');
           // adiciona classe divRed a cor vermelha do semáforo
           redCircle.classList.add('divRed');
           // alterando texto dentro da cor vermelha do semáforo
           redCircle.innerText = (cont);

           // condição para imprimir texto dentro da cor vermelha do semáforo com ou sem o 0 no início
           if(cont <= 9) {
            //    imprime como 01, 02, etc.
               redCircle.innerText = (`0${cont}`);
           }else{
            //    imprime como 10, 11, 12, etc.
                redCircle.innerText = (cont);  
           };
        //    cria condição para piscar a cor verde do semáforo do pedestre quando faltar 5 segundos para trocar a cor do semáforo
           if(cont > (tempRed - 5)) {
               //   true
               if(!flagSem) {
                   // troca o valor de flagSem que inicia em false
                   flagSem = true;
                   // adiciona classe de cor padrão(grey) ao circulo verde do semáforo do pedestre
                   pedCircle2.classList.add('grey');
                   // remove a cor verde do semáforo do pedestre
                   pedCircle2.classList.remove('divGreen');
               }else{
                   // muda o valor de flagSem para false
                   flagSem = false;
                   // remove classe de cor padrão(grey) do circulo verde do semáforo do pedestre
                   pedCircle2.classList.remove('grey');
                   // adiciona classe divGreen a cor verde do semáforo do pedestre
                   pedCircle2.classList.add('divGreen');
               }

           }else{
               // remove classe de cor padrão(grey) do circulo verde do semáforo do pedestre
               pedCircle2.classList.remove('grey');
               // adiciona classe divGreen ao circulo verde do semáforo do pedestre
               pedCircle2.classList.add('divGreen');
           }

        // condição para ligar e desligar a cor verde do semáforo, levando em consideração a var cont enquanto for menor ou igual que o tempRed + (tempGreen - reducaoTempSemVerde)
       }else if(cont <= (tempRed + (tempGreen - reducaoTempSemVerde))) {

            // limpa o texto dentro do circulo vermelho
           redCircle.innerText = "";
           // remove a classe divRed da cor vermelha do semáforo
           redCircle.classList.remove('divRed');
           // adiciona a classe de cor padrão(grey) no circulo vermelho do semáforo
           redCircle.classList.add('grey');
           // remove a classe padrão(grey) do circulo verde
           greenCircle.classList.remove('grey');
           // adiciona a classe divGreen no circulo verde do semáforo
           greenCircle.classList.add('divGreen');
           // condição para imprimir texto dentro do circulo verde, levando em consideração, o tempo total - o tempo do circulo vermelho 
           if((cont - tempRed) <= 9) {
               // imprime como 01, 02, 03, etc.
               greenCircle.innerText = (`0${cont - tempRed}`);
            }else{
                // imprime como 10, 11, 12, etc.
                greenCircle.innerText = (cont - tempRed);  
            };
            // remove a classe divGreen do circulo verde do semáforo do pedestre
            pedCircle2.classList.remove('divGreen');
            // adiciona a classe de cor padrão(grey) ao circulo verde do semáforo do pedestre
            pedCircle2.classList.add('grey');
            // remove a classe padrão(grey) do circulo vermelho do semáforo do pedestre
            pedCircle1.classList.remove('grey');
            // adiciona a classe divRed ao circulo vermelho do semáforo do pedestre
            pedCircle1.classList.add('divRed');

            // cria uma condição para permitir a utilização do botão 'pedestre' e impedir que ele seja precionado mais do que a quantidade de ciclos que foi determinada pelo tempCooldawn
            if(cooldawn === tempCooldawn){
                // incrementa +1 a variavel reducaoTempSemVerde
                reducaoTempSemVerde++
            }

        // condição para ligar e desligar o semáforo amarelo, levando em consideração enquanto a var cont for menour ou igual ao tempRed + tempYellow + (tempGreen - reducaoTempSemVerde)
       }else if(cont <= (tempRed + tempYellow + (tempGreen - reducaoTempSemVerde))) {

            // limpa o texto dentro do circulo verde do semáforo
           greenCircle.innerText = "";
           // remove a classe divGreen do circulo verde do semáforo
           greenCircle.classList.remove('divGreen');
           // adiciona a classe de cor padrão(grey) ao circulo verde do semáforo
           greenCircle.classList.add('grey');
          
           // remove a classe de cor padrão(grey) do circulo amarelo
           yellowCircle.classList.remove('grey');
           // adiciona a classe divYellow ao circulo amarelo do semáforo
           yellowCircle.classList.add('divYellow');
        
           // verifica a impressão do texto dentro do circulo amarelo, levando em consideração (cont - (tempRed +(tempGreen - reducaoTempoSemVerde))) menor ou igual á 9
           if((cont - (tempRed + (tempGreen - reducaoTempSemVerde))) <= 9) {
            //    improme como 01, 02, 03, etc.
               yellowCircle.innerText = (`0${cont - (tempRed + (tempGreen - reducaoTempSemVerde))}`);
            }else{
                // imprime como 10, 11, 12, etc.
                yellowCircle.innerText = (cont - (tempRed + (tempGreen - reducaoTempSemVerde)));  
            };
       // condição para resetar os semáforos
       }else{
            // """zera""" o cont (zera com o valor de 1 por conta de um delay que existe caso mude para 0)
           cont = 1;
           
           // remove a classe divYellow do circulo amarelo do semáforo
           yellowCircle.classList.remove('divYellow');
           // adiciona a classe de cor padrão(grey) ao circulo amarelo do semáforo
           yellowCircle.classList.add('grey');
           // limpa o texto dentro do circulo amarelo
           yellowCircle.innerText = "";

           // remove a classe de cor padrão(grey) do circulo vermelho
           redCircle.classList.remove('grey');
           // adiciona a classe divRed ao circulo vermelho
           redCircle.classList.add('divRed');
           // imprime um texto no circulo vermelho que já começa em 1
           redCircle.innerText = (`0${cont}`);

           // remove a classe divRed do circulo vermelho do semáforo do pedestre
           pedCircle1.classList.remove('divRed');
           // adiciona a classe de cor padrão(grey) do circulo vermelho
           pedCircle1.classList.add('grey');
           // remove a classe de cor padrão(grey) do circulo verde do pedestre
           pedCircle2.classList.remove('grey');
           // adiciona a classe divGreen ao circulo verde do pedestre
           pedCircle2.classList.add('divGreen');

           // cooldawn pra controlar o botão do pedestre
           // cooldawn decrementa o valor dele mesmo
           cooldawn--
           // zera reducaoTempSemVerde
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

        // NOTA: iniciava o circulo amarelo do semáforo com o valor do cooldawn em 2

        // reducaoTempSemVerde = 1;
        cooldawn = tempCooldawn;
        //console.log(cooldawn);
    }
}

// função do botão Manutenção
function manutencao () {
    // limpa o 'mudar' para evitar chamar o método do botão Manutenção mais de uma vez
    clearInterval(mudar);
    // limpa o 'timer' para evitar chamar o método do botão Iniciar junto ao método Manutenção
    clearInterval(timer);
    cont = 0;
    // remove as alterações feitas no botão iniciar e volta ao padrão
    // remove a classe divRed do circulo vermelho do semáforo
    redCircle.classList.remove('divRed');
    // remove a classe divYellow do circulo amarelo do semáforo 
    yellowCircle.classList.remove('divYellow');
    // remove a classe divGreen do circulo verde do semáforo
    greenCircle.classList.remove('divGreen');
    // adiciona a classe de cor padrão(grey) ao circulo vermelho do semáforo
    redCircle.classList.add('grey');
    // adiciona a classe de cor padrão(grey) ao circulo amarelo do semáforo
    yellowCircle.classList.add('grey');
    // adiciona a classe de cor padrão(grey) ao circulo verde do semáforo
    greenCircle.classList.add('grey');
    // limpa o texto dentro do circulo vermelho
    redCircle.innerText = "";
    // limpa o texto dentro do circulo amarelo
    yellowCircle.innerText = "";
    // limpa o texto dentro do circulo verde
    greenCircle.innerText = "";
    // remove a classe divRed do circulo vermelho do semáforo do pedestre
    pedCircle1.classList.remove('divRed');
    // adiciona a classe de cor padrão(grey) ao circulo vermelho do semáforo do pedestre
    pedCircle1.classList.add('grey');
    // remove a classe divGreen do circulo verde do semáforo do pedestre
    pedCircle2.classList.remove('divGreen');
    // adiciona a classe de cor padrão(grey) ao circulo verde do semáforo do pedestre
    pedCircle2.classList.add('grey');
    // cria função com uma condição para o semáforo entrar em manutenção
    mudar = setInterval(function() {
        // condição para entrar em manutenção
        //  true
        if(!flag) {
            // muda o valor de flag para true
            flag = true;
            // remove a classe de cor padrão(grey) da cor amarelo do semáforo
            yellowCircle.classList.remove('grey');
            // adiciona a classe divYellow ao circulo amarelo do semáforo
            yellowCircle.classList.add('divYellow');
            // remove a classe de cor padrão(grey) da cor vermelho do semáforo do pedestre
            pedCircle1.classList.remove('grey');
            // adiciona a classe divRed no circulo vermelho do semáforo do pedestre
            pedCircle1.classList.add('divRed');
            // remove a classe de cor padrão(grey) da cor verde do semáforo do pedestre
            pedCircle2.classList.remove('grey');
            // adiciona a classe divGreen no circulo verde do semáforo do pedestre
            pedCircle2.classList.add('divGreen');
        }else{
            // muda o valor de flag pra false
            flag = false;
            // adiciona a classe de cor padrão(grey) ao circulo amarelo do semáforo
            yellowCircle.classList.add('grey');
            // remove a classe divYellow do circulo amarelo do semáforo
            yellowCircle.classList.remove('divYellow');
            // adiciona a classe de cor padrão(grey) ao circulo vermelho do semáforo do pedestre
            pedCircle1.classList.add('grey');
            // remove a classe divRed do circulo vermelho do semáforo do pedestre
            pedCircle1.classList.remove('divRed');
            // adiciona a classe de cor padrão(grey) ao circulo verde do semáforo do pedestre
            pedCircle2.classList.add('grey');
            // remove a classe divGreen do circulo verde do semáforo do pedestre
            pedCircle2.classList.remove('divGreen');
        }
    }, 500);
};