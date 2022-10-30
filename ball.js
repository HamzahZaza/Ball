
var positionX = 0;
var positionY = 0;

var velocity = 2;

var wmin = 100;
var wmax = 200;
var hmin = 100;
var hmax = 200;

var reverse = false;
var r = 0, g = 0, b = 0;
var ball = document.getElementById("ball");


function moveBall() {


  var r  =  Math.floor(Math.random() * 256);
  var g  =  Math.floor(Math.random() * 256);
  var b  =  Math.floor(Math.random() * 256);
  var newrgb =`rgb(${r}, ${g}, ${b})`
  var newheight = Math.floor(Math.random() *(hmax - hmin)) + hmin;
  var newwidth = Math.floor(Math.random() * (wmax - wmin)) + wmin;

  var Xmin = 0;
  var Xmax = 500;

  var Ymin = 0;
  var Ymax = 400;

  if (reverse) {
    

    positionX = positionX - velocity;
    positionY = positionY - velocity * 0.3;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity * 0.3;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
    ball.style.backgroundColor = newrgb;
    ball.style.height = newheight + "px";
    ball.style.width = newwidth + "px";
  }

}
setInterval(moveBall, 10);




