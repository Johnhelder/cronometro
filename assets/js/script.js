let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;

let cron;

function iniciar(){
  cron = setInterval(() => {timer();}, tempo);
}

function timer(){
  document.getElementById("tempos").innerHTML = '123';
}