const canvas = document.getElementById("main-window");

console.log(canvas)
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
function resizeCanvas()
{
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.9;
    console.log("123213123");
}