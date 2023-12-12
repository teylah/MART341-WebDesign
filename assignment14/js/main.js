var canvas = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

ctx.fillStyle = "grey";
ctx.fillRect(50, 50, 300, 100);

//fill text
ctx.font = "16px monospace"
ctx.fillText = "black"
ctx.strokeText('a little life', 100, 550);

//author
ctx.font = '12pt Roboto'
ctx