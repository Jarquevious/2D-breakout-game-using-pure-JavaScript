class Brick {
  constructor(x, y, status = 1, color = '#0095DD', width = 75, height = 20) {
    this.x = x;
    this.y = y;
    this.status = status;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
