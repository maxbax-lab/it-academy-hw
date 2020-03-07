export function ViewSvg() {
    this.init = function(field) {
      let clock = field.querySelector('.clock');
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svg.setAttribute('height', 500);
      this.svg.setAttribute('width', 500);
      clock.append(this.svg);
    }
    this.update = function(timezone) {
      if (!this.svg.children.length) {
        createClock(this.svg);
      }
      updateTime(this.svg, timezone);
    }
}
  function createClock(svg) {
    let width = svg.getAttribute('width');
    let height = svg.getAttribute('height');
    let cx = width/2;
    let cy = height/2;
    let radius = height/2;

    createFace(svg, cx,cy,radius);
    createCircles(svg, width, height, radius);
    createText(svg,width,height,radius);
    createDigialTime(svg, cx, cy, radius);
    createhandHour(svg, cx, cy, 'black');
    createhandMin(svg, cx, cy, 'blue');
    createhandSec(svg, cx, cy, 'red');
  }
  function createFace(svg,cx,cy,radius) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('fill', 'white');
    circle.setAttribute('r', radius);
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    svg.append(circle);
  }
  function createCircles(svg, width, height, radius) {
    for(let i = 1; i<= 12; i++){
      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('fill', 'lightpink');
      circle.setAttribute('r', radius/8);
      circle.setAttribute('cx', width / 2 + radius*0.77 * Math.sin(i * 0.523));
      circle.setAttribute('cy', height / 2 - radius*0.77 * Math.cos(i * 0.523));
      svg.append(circle);
    }
  }
  function createText(svg, width, height, radius) {
    for(let i = 1; i<=12; i++){
      let numbers = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      numbers.setAttribute('x',width / 2 + radius*0.77 * Math.sin(i * 0.523));
      numbers.setAttribute('y',height / 2 - radius*0.77* Math.cos(i * 0.523));
      numbers.setAttribute('text-anchor','middle');
      numbers.setAttribute('textAlign', 'center');
      numbers.setAttribute('font-size','35');
      numbers.setAttribute('font-family','Sans-Serif');
      numbers.textContent=i;
      svg.append(numbers);
    }
  }
  
  function createhandHour(svg,cx,cy,color) {
    let handHour = document.createElementNS('http://www.w3.org/2000/svg','line');
    handHour.setAttribute('x1', cx);
    handHour.setAttribute('y1', 1.3*cy);
    handHour.setAttribute('x2', cx);
    handHour.setAttribute('y2', cy);
    handHour.setAttribute('stroke', color);
    handHour.setAttribute('stroke-width', 10);
    handHour.setAttribute('stroke-linecap', 'round');
    handHour.setAttribute('class', 'handHour');
    svg.append(handHour);
  }
  function createhandMin(svg, cx, cy,color) {
    let handMin = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    handMin.setAttribute('x1', cx);
    handMin.setAttribute('y1', 1.55*cy);
    handMin.setAttribute('x2', cx);
    handMin.setAttribute('y2', cy);
    handMin.setAttribute('stroke', color);
    handMin.setAttribute('stroke-width', 4);
    handMin.setAttribute('stroke-linecap', 'round');
    handMin.setAttribute('class', 'handMin');
    svg.append(handMin);
  }
  function createhandSec(svg, cx, cy, color) {
    let handSec = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    handSec.setAttribute('x1', cx);
    handSec.setAttribute('y1', 1.7*cy);
    handSec.setAttribute('x2', cx);
    handSec.setAttribute('y2', cy);
    handSec.setAttribute('stroke', color);
    handSec.setAttribute('stroke-width', 2);
    handSec.setAttribute('stroke-linecap', 'round');
    handSec.setAttribute('class', 'handSec');
    svg.append(handSec);
  }
  
  function updateTime(svg, timezone) {
    let date = new Date();
    let hour = date.getUTCHours() + timezone;
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    let svgWidth = svg.getAttribute('width');
    let svgHeight = svg.getAttribute('height');
    let handHour = svg.querySelector('.handHour');
    let handMin = svg.querySelector('.handMin');
    let handSec = svg.querySelector('.handSec');
    let angleSec = sec*6/180*Math.PI;
    let angleMin = min*6/180*Math.PI;
    let angleHour =(hour*30+ 0.5*min)/180*Math.PI ;
    handSec.setAttribute('transform',`rotate(${angleSec} ${svgWidth / 2} ${svgHeight / 2} )`);
    handMin.setAttribute('transform',`rotate(${angleMin} ${svgWidth / 2} ${svgHeight / 2})`);
    handHour.setAttribute('transform',`rotate(${angleHour} ${svgWidth / 2} ${svgHeight / 2})`);

    document.getElementById('time').textContent = date.toLocaleTimeString();
  }
  function createDigialTime(svg, cx, cy, radius) {
    let digitalTime = document.createElementNS('http://www.w3.org/2000/svg','text');
    digitalTime.setAttribute('x', cx);
    digitalTime.setAttribute('y', cy-radius/2.5);
    digitalTime.setAttribute('text-anchor','middle');
    digitalTime.setAttribute('font-size','35');
    digitalTime.setAttribute('font-family','Sans-Serif');
    digitalTime.id = 'time';
    svg.append(digitalTime);
  }
 
