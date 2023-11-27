let hh = 0;
let mm = 0;
let ss = 0; 

function start(){
  setInterval(timer, 1000) 
}

function timer(){
  ss++;
  document.getElementById("tempos").innerHTML = ss;
}