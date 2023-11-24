function iniciarTime(){
  setTimeout(function(){
    let x = new Date().toLocaleString();
    document.getElementById('tempo').innerHTML = x;
  }, 1000);
}

const time = document.getElementById("tempo").innerHTML = '12:12';