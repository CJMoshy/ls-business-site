interface Renderable {
  draw: (ctx: CanvasRenderingContext2D) => void;
}
export default class Particle implements Renderable{
  x!: number;
  y!: number;
  vx!: number;
  vy!: number;
  radius!: number;
  life!: number;
  width: number;
  height: number;

  color: string;
  constructor(width: number, height: number, color: string) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = this.height;
    // Random velocity
    const choose = () => (Math.random() > 0.5 ? 1 : -1);
    this.vx = Math.random() * choose();
    this.vy = Math.random() * 0.4 + 0.2;

    // Random size
    this.radius = Math.round(Math.random() + 1.5);

    // Random lifetime
    this.life = Math.random() * 7500;
  }

  update() {
    // Simple physics
    this.x -= this.vx;
    this.y -= this.vy;
    this.life--;

    // Reset particle when it dies or goes off screen
    if (this.life <= 0 || this.y <= 0) {
      this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Batch drawing using single path
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
