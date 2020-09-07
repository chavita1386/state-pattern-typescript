import './css/tailwind/main.css';
import Canvas from './state/canvas';
import CircleTool from './state/circleTool';
import RectangleTool from './state/rectangleTool';

const mainCanvas = document.querySelector('#mainCanvas') as HTMLCanvasElement,
  mainCanvasLeft = mainCanvas.offsetLeft,
  mainCanvasTop = mainCanvas.offsetTop,
  context = mainCanvas.getContext('2d'),
  btnRectangle = document.querySelector('#btnRectangle') as HTMLButtonElement,
  btnCircle = document.querySelector('#btnCircle') as HTMLButtonElement,
  labelCurrentTool = document.querySelector('#currentTool') as HTMLLabelElement;

const canvas = new Canvas(context);
const tools = {
  rectangle: {
    instance: new RectangleTool(),
    color: '#e7620b',
  },
  circle: {
    instance: new CircleTool(),
    color: '#336bff',
  },
};

function selectTool() {
  const dataName = this.getAttribute('data-name');
  canvas.currentTool = tools[dataName].instance;
  canvas.currentTool.color = tools[dataName].color;
  labelCurrentTool.textContent = dataName;
}

mainCanvas.addEventListener('click', event => {
  const x = event.pageX - mainCanvasLeft,
    y = event.pageY - mainCanvasTop;

  canvas.currentTool.x = x;
  canvas.currentTool.y = y;
  canvas.draw();
});

btnRectangle.addEventListener('click', selectTool);
btnCircle.addEventListener('click', selectTool);
