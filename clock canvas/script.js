const width= 500;
const height = 500;
const cx = width / 2;
const cy = height / 2;
const radius = (width / 2) - 10;

createClock()

let canvasClock = document.createElement('canvas');
canvasClock.id = 'clock';
canvasClock.width = 500;
canvasClock.height = 500;
document.body.appendChild(canvasClock);

function createClock(){
    let clock = document.getElementById('clock');
    let context = clock.getContext('2d');

    //циферблат
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'white';
    context.lineWidth = 3;
    context.arc(cx, cy, radius, 0, 2 * Math.PI, false);
    context.moveTo(cx, cy)
    context.stroke();
    context.fill();
    context.closePath();

    for (let i = 1; i <= 12; i++){
        let angle = i*30/180*Math.PI;
        let x = cx + (radius - width/10)*Math.sin(angle);
        let y = cy - (radius - width/10)*Math.cos(angle);

        context.beginPath();
        context.strokeStyle = 'black';
        context.fillStyle = 'lightpink';
        context.lineWidth = 2;
        context.arc(x,y,radius/8,0,2*Math.PI,false);
        context.moveTo(x,y);
        context.stroke();
        context.fill();
        context.closePath;

        context.beginPath();
        context.fillStyle='black';
        context.font= '35px Sans-Serif';
        context.textAllign = 'center';
        context.textBaseline = 'middle';
        context.fillText(i, x - radius/17, y);
        context.closePath();
    }

    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let angleHour = (hour%12)/12*360+min/60*30;
    let angleMin = min/60*360;
    let angleSec = sec/60*360;

    //часовая стрелка
    context.lineCap = 'round';
    context.beginPath();
    context.lineWidth = 11;
    context.moveTo(cx,cy);
    context.lineTo(cx + 80*Math.cos(Math.PI/2 - angleHour*(Math.PI/180)),cy - 80*Math.sin(Math.PI/2 - angleHour*(Math.PI/180)));
    context.stroke();
    context.closePath();

    //минутная стрелка
    context.lineCap = 'round';
    context.strokeStyle = 'red';
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(cx,cy);
    context.lineTo(cx + 135*Math.cos(Math.PI/2 - angleMin*(Math.PI/180)),cy - 135*Math.sin(Math.PI/2 - angleMin*(Math.PI/180)));
    context.stroke();
    context.closePath();

    //секундная стрелка
    context.lineCap = 'round';
    context.strokeStyle = 'green';
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(cx,cy);
    context.lineTo(cx + 170*Math.cos(Math.PI/2 - angleSec*(Math.PI/180)),cy - 170*Math.sin(Math.PI/2 - angleSec*(Math.PI/180)));
    context.stroke();
    context.closePath();
    
    // цифровые часы
    context.beginPath();
    context.fillStyle='black';
    context.fillText(date.toLocaleTimeString(), radius/1.27, radius/1.7);
    context.font= '35px Sans-Serif';
    context.closePath();
}

setInterval(function(){
    createClock();
  },1000);
