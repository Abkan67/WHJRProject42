class Rain {

    constructor(x,y) {
this.x = x; this.y = y; this.dy=1;
    }

    update() {
        this.y+=(this.dy++)/10; this.draw();
    }

    draw() {
        push();
        fill("#afc3cc");
        ellipse(this.x, this.y, 10,10);
        pop();
    }
}