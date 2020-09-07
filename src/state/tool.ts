interface Tool {
  x: number;
  y: number;
  color: string;
  draw(context: CanvasRenderingContext2D): void;
}

export {Tool};
