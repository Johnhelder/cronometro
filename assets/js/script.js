let hh = 0;
let mm = 0;
let ss = 55; 

function start(){
  setInterval(timer, 1000) 
}

function timer(){
  ss++;
  if(ss==60){
    mm++
    ss=0
  }
  document.getElementById("tempos").innerHTML =mm +':' + ss;
}