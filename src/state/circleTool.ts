import {Tool} from './tool';

export default class CircleTool implements Tool {
  x: number;
  y: number;
  color: string;

  draw(context: CanvasRenderingContext2D): void {
    console.log('Drawing a circle');
    context.beginPath();
    context.arc(this.x, this.y, 30, 0, Math.PI * 2, true);
    context.fillStyle = this.color;
    context.fill();
  }
}
