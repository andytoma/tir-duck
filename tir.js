var bullets = 10; // cite patroane
var quack = new Audio();
    quack.src = 'Duckquack.mp3';
var gunshot = new Audio();
    gunshot.src = 'Gunshot.mp3';
var bullets_div = document.getElementById('bullets');
var bullets = 10;
    bullets_div.innerHTML = bullets;
var ducks_div = document.getElementById('ducks_killed');
var ducks = 0;
    ducks_div.innerHTML = ducks;





function addDuck(){
    var lake = document.getElementById('lake');
    var duck = `<div id="duck" class="duck" onclick="killDuck(), score()"></div>`;
    lake.innerHTML = duck;
}
function moveDuck(){
    var duck = document.getElementById('duck');
        duck.style.bottom = randomBottom() + "px";
}
function randomBottom(){
    var bot = Math.floor(Math.random() * 180);
    return bot;
}
setInterval(moveDuck, 1000);
function shot(){
    bullets--;
    bullets_div.innerHTML = bullets;
  if(bullets <= 0 ){
    alert("GAME OVER");
    location.reload();
  }
  gunshot.play();
}
function score(){
  ducks++;
  ducks_div.innerHTML = ducks;
  if(ducks >= 10){
    alert("Congratulations, you finished the game!");
    location.reload();
  }
}

function killDuck(){
    quack.play()
}

///////////////////START GAME////////////////////
addDuck();
