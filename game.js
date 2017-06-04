


var highscore = getCookie("highscore");
console.log(highscore);
if (highscore == null) {
  highscore = 0;
}
var thighscore = highscore;
var points = 0;
var c, canvas, width, height, centerX, centerY, interval;
var blocks = [];
function init() {
  c = document.getElementById('game');
  canvas = c.getContext('2d');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  canvas.beginPath();
  canvas.rect(0, 0, window.innerWidth, window.innerHeight);
  canvas.fillStyle = "black";
  canvas.fill();

  width = window.innerWidth;
  height = window.innerHeight;
  document.getElementById("game").innerHTML = "";
  centerX = width / 2;
  centerY = height / 2;
  canvas.fillStyle="white";

  interval = setInterval(gameLoop, 10);

}

 var offsetX = 0;
remove = 0;
counter = 301;
function gameLoop() {
  canvas.beginPath();
  canvas.rect(0, 0, window.innerWidth, window.innerHeight);
  canvas.fillStyle = "black";
  canvas.fill();
  canvas.fillStyle="white";
  canvas.fillRect(centerX + offsetX, height - 250, 40, 40);

  if (offsetX < -centerX) {} else {
  if (moveLeft == true) {
    offsetX = offsetX - 7;
  }
}
  if (offsetX > centerX - 40) {} else {
  if (moveRight == true) {
    offsetX = offsetX + 7;
  }
}

if (counter >= 200 - remove) {
  blocks = blocks.concat([[getRandomArbitrary(0, width), -40]]);
  counter = 0;
}
current = 0;
blocks.forEach(function(block) {

  if (block[1] > height) {
    blocks.splice( current, 1 );
    remove = remove + 1;
    if (remove > 100) {
      remove--;
    }
  } else {
  block[1] = block[1] + 4;

  canvas.fillRect(block[0] - 50, block[1], block[0] - 3000, 40);
  canvas.fillRect(block[0] + 100, block[1], block[0] + 2000, 40);

  blocks[current] = block;
}
current++;
});
  cb = blocks[blocks.length-1];
  canvas.fillStyle = ("red");
  canvas.rect(cb[0] - 50, height - 250, 100, 40);
if (cb[1] > height - 250 && cb[1] < height - 210) {

  cpos = centerX + offsetX;
  if (cpos > cb[0] - 50 && cpos < cb[0] + 100) {
    points++;
    if (Math.floor(points / 10) >= thighscore) {
      thighscore = Math.floor(points / 10);
      setCookie("highscore", Math.floor(points / 10), 365);

    }
      document.getElementById("score").innerHTML = "Points: " + Math.floor(points / 10) + "<br>Highscore: " + thighscore;
  } else {
    alert("You died!");
    points = 0;
    current = 0;
    blocks = [];
    counter = 301;
    offsetX = 0;
    moveLeft = false;
    moveRight = false;
    document.getElementById("score").innerHTML = "Points: " + Math.floor(points / 10) + "<br>Highscore: " + thighscore;

  }
}
counter++;
}





var moveLeft = false;
var moveRight = false;
$(window).keydown(function(evt) {
  if (evt.which == 37) { // ctrl
    moveLeft = true;
  }

  if (evt.which == 39) { // ctrl
    moveRight = true;
  }
}).keyup(function(evt) {
  if (evt.which == 37) { // ctrl
    moveLeft = false;
  }

  if (evt.which == 39) { // ctrl
    moveRight = false;
  }
});

$("#left").on('mousedown touchstart', function(){
     moveLeft = true;
 });
 $("#right").on('mousedown touchstart', function(){
     moveRight = true;
 });
 $(document).on('mouseup touchend', function(){
     moveLeft = false;
 moveRight = false;
 });
