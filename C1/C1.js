const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const radius = 30;
let x = radius;
let y = canvas.height / 2;
let speed = 3;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    x += speed;

    if (x - radius > canvas.width) {
        x = -radius;
    }
    requestAnimationFrame(drawCircle);
}
drawCircle();