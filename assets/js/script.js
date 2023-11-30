let hh = 0;
let mm = 0;
let ss = 0; 
let intervalo;

function start(){
  intervalo = setInterval(timer, 1000) 
}

function stop(){
  clearInterval(intervalo)
}

function pause(){
  clearInterval(intervalo)
  ss = 0;
  mm = 0;
  document.getElementById("tempos").innerHTML = '00:00';
}

function timer(){
  ss++;
  if(ss==60){
    mm++
    ss=0
  }
  document.getElementById("tempos").innerHTML =mm +':' + ss;
}