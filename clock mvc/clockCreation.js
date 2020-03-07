import { Model } from './clockModel.js';
import { ViewCanvas } from './clockViewCanvas.js';
import { ViewSvg } from './clockViewSVG.js';
import { Controller } from './clockController.js';


let clockCanvas1 = new ViewCanvas();
let clockSvg1 = new ViewSvg();

let clockModel1 = new Model(+1,clockCanvas1);
let clockModel2 = new Model(+0,clockSvg1);

let controller1 = new Controller(clockModel1);
let controller2 = new Controller(clockModel2);

let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');

clockCanvas1.init(container1);
controller1.init(container1);
clockModel1.updateView();

clockSvg1.init(container2);
controller2.init(container2);
clockModel2.updateView();

