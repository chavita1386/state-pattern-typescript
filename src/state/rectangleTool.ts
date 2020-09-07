import {Tool} from './tool';

export default class RectangleTool implements Tool {
  x: number;
  y: number;
  color: string;

  draw(context: CanvasRenderingContext2D): void {
    console.log('drawing a rectangle');
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 50, 50);
  }
}
