var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
color = "Grey";
widthOfLine = 1;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").hei = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchStart", my_touchStart);
function my_touchStart(e) {
    console.log("my_touchstart");
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("my_touchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = widthOfLine;
    console.log("Ultima posicao das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY); console.log("Posicao atual do x e y = ");
    console.log("x = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();
    lastPositionOfX = currentPositionOfTouchX;
    lastPositionOfY = currentPositionOfTouchY;
}