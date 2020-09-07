import {Tool} from './tool';

export default class Canvas {
  private _currentTool: Tool;
  private _context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  public draw() {
    this._currentTool.draw(this._context);
  }

  get currentTool(): Tool {
    return this._currentTool;
  }

  set currentTool(currentTool: Tool) {
    this._currentTool = currentTool;
  }
}
