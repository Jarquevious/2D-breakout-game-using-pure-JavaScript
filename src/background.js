class Background {
  constructor(width, height, color = '#eee') {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
export default Background;
