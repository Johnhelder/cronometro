let hh = 0;
let mm = 59;
let ss = 55; 
let intervalo;

function twoDigits(digit){
  if(digit<10){
    return('0'+digit);
  }else{
    return(digit);
  }
}

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
    if(mm==60){
      mm=0;
      hh++
    }
  }
  document.getElementById("tempos").innerHTML =hh+':'+mm +':' + twoDigits(ss);
}