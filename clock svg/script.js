const width = 500;
const height = 500;
const radius = height/2;
const cx = width/2;
const cy = height/2;

function createClock(){

    let clockContainer = document.createElement('div');
    clockContainer.style.width = `${width}px`;
    clockContainer.style.height = `${height}px`;
    document.body.appendChild(clockContainer);
  
    let clockSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    clockSvg.setAttribute('width', width);
    clockSvg.setAttribute('height', height);
    clockSvg.id = 'clock';
    clockContainer.appendChild(clockSvg);
    let clock = document.getElementById('clock');
  
    let clockFace = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    clockFace.setAttribute('fill','white');
    clockFace.setAttribute('stroke','black');
    clockFace.setAttribute('cx',cx);
    clockFace.setAttribute('cy',cy);
    clockFace.setAttribute('r',radius);
    clock.appendChild(clockFace);

    for(let i=1; i<=12; i++){
        let group = document.createElementNS('http://www.w3.org/2000/svg','g')
        group.setAttribute('class','group');
        clock.appendChild(group);

        let divisions = document.createElementNS('http://www.w3.org/2000/svg','circle');
        let angle = i*30/180*Math.PI;

        divisions.setAttribute('fill','lightpink');
        divisions.setAttribute('stroke','black')
        divisions.setAttribute('cx',cx + (radius - width/10)*Math.sin(angle));
        divisions.setAttribute('cy',cy - (radius - width/10)*Math.cos(angle));
        divisions.setAttribute('r',radius/8);

        group.appendChild(divisions);

        let numbers = document.createElementNS('http://www.w3.org/2000/svg','text');
        numbers.setAttribute('x',cx + (radius - width/10)*Math.sin(angle));
        numbers.setAttribute('y',cy - (radius - width/10)*Math.cos(angle)+ radius/20);
        numbers.setAttribute('text-anchor','middle');
        numbers.setAttribute('font-size','35');
        numbers.setAttribute('font-family','Sans-Serif');
        numbers.textContent=i;

        group.appendChild(numbers);
    }
    let hour = document.createElementNS('http://www.w3.org/2000/svg','line');
    hour.setAttribute("style", "stroke:black; stroke-width: 2.5%; stroke-linecap:round");
    hour.setAttribute('x1',cx);
    hour.setAttribute('y1',cy*1.4);
    hour.setAttribute('x2',cx);
    hour.setAttribute('y2',cy);
    hour.id = 'hour';
    clock.appendChild(hour);

    let min = document.createElementNS('http://www.w3.org/2000/svg','line');
    min.setAttribute("style", "stroke:red; stroke-width: 0.9%; stroke-linecap:round");
    min.setAttribute('x1',cx);
    min.setAttribute('y1',cy*1.65);
    min.setAttribute('x2',cx);
    min.setAttribute('y2',cy);
    min.id = 'min';
    clock.appendChild(min);

    let sec = document.createElementNS('http://www.w3.org/2000/svg','line');
    sec.setAttribute("style", "stroke:green; stroke-width: 0.9%; stroke-linecap:round");
    sec.setAttribute('x1',cx);
    sec.setAttribute('y1',cy*1.8);
    sec.setAttribute('x2',cx);
    sec.setAttribute('y2',cy);
    sec.id = 'sec';
    clock.appendChild(sec);

    let digitalTime = document.createElementNS('http://www.w3.org/2000/svg','text');
    digitalTime.setAttribute('x', cx);
    digitalTime.setAttribute('y', cy-radius/2.5);
    digitalTime.setAttribute('text-anchor','middle');
    digitalTime.setAttribute('font-size','35');
    digitalTime.setAttribute('font-family','Sans-Serif');
    digitalTime.id = 'time';

    clockSvg.appendChild(digitalTime);

    runClock();
}
createClock();

function runClock(){
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let angleHour = (hour%12)/12*360+min/60*30;
    let angleMin = min/60*360;
    let angleSec = sec/60*360;

    document.getElementById('time').textContent = date.toLocaleTimeString();
    
    document.getElementById('hour').setAttribute('transform', `rotate(${angleHour} ${cx} ${cy})`);
    document.getElementById('min').setAttribute('transform', `rotate(${angleMin} ${cx} ${cy})`);
    document.getElementById('sec').setAttribute('transform', `rotate(${angleSec} ${cx} ${cy})`)
}
setInterval(function(){
    runClock();
  },1000);