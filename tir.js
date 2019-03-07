var bullets = 10; // cite patroane ai????

function addDuck(){
  var lake = document.getElementById('lake');
  var duck = `<div id="duck" class="duck" onclick="killDuck();"></div>`;
  lake.innerHTML = duck;
}
function audioQuack(){
  var aux = document.getElementById('aux');
  var audio = `<audio
        controls
        src="/media/examples/t-rex-roar.mp3" autoplay>
            <code>audio</code> element.
    </audio>`
  aux.innerHTML = audio;
}

function moveDuck(){
  var duck = document.getElementById('duck');
  duck.style.bottom =randomBottom()+ 'px';
}

function randomBottom(){
  var bot = Math.floor(Math.random()*200);
  return bot;
}

setInterval(moveDuck, 2000);
function killDuck(){
  audioQuack();
}


////////////////////////   START GAME   ///////////////////

addDuck();
