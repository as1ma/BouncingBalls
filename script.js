"use strict";
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
class Ball {
    constructor(x, y, dx, dy, radius) {
        this.x = 100;
        this.y = 100;
        this.dx = (Math.random() - .5 * 10);
        this.dy = (Math.random() - .5 * 10);
        this.radius = 50;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
    CheckBounce() {
        if (this.x > c.width - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > c.height - this.radius || this.y < 0) {
            this.dy = -this.dy;
        }
    }
}
const numberOfBalls = 10;
const balls = [];
for (let i = 0; i < numberOfBalls; i++) {
    balls.push(new Ball(300, 400, (Math.random() - .5 * 10), 0, 2 * Math.PI));
}
requestAnimationFrame(cycle);
function cycle() {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 0; i < numberOfBalls; i++) {
        balls[i].drawBall();
        balls[i].move();
        balls[i].CheckBounce();
    }
    requestAnimationFrame(cycle);
    //this is a diagonal line
    // ctx?.moveTo(50,50)
    // ctx?.lineTo(450,450)
    // ctx?.stroke()
    //this is a semi-circle/arc
    // ctx.beginPath()
    // ctx.arc(x,y,100,0,Math.PI)
    // ctx.fillStyle = "green"
    // ctx.fill()
    // ctx.lineWidth = 5
    // ctx.strokeStyle = "#003300"
    // ctx.stroke()
}
//# sourceMappingURL=script.js.map