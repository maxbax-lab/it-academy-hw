export function ViewCanvas() {

  this.init = function(field) {
    let clock = field.querySelector('.clock');
    this.canvas = document.createElement('canvas');
    clock.append(this.canvas);
    this.canvas.width = 500;
    this.canvas.height = 500;
  }
  this.update = function(timezone) {
    createClock(this.canvas, timezone);
  }
}

function createClock(canvas, timezone) {
  
  let ctx = canvas.getContext('2d');
  let width = canvas.width;
  let height = canvas.height;
  let cx = canvas.width/2;
  let cy = canvas.height/2;
  let radius = canvas.width/2;
  
  clearCnv(ctx, width, height);
  createFace(ctx, cx, cy, radius);
  createCircles(ctx, width, height, radius);
  createNumbers(ctx, width, height, radius);
  createhand(ctx, cx, cy, 90, 10, 'black', timezone);
  createhand(ctx, cx, cy, 130, 5, 'blue');
  createhand(ctx, cx, cy, 180, 2, 'red');
  createDigitalClock(ctx, cx, height, timezone);
}

function clearCnv(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
}

function createFace(ctx, cx, cy, radius) {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function createCircles(ctx, width, height, radius) {
  for (let i = 1; i <= 12; i++) {
    let numberRadius = radius * 0.77;
    let numberX = width / 2 + numberRadius * Math.sin(i * 0.523);
    let numberY = height / 2 - numberRadius * Math.cos(i * 0.523);
    ctx.fillStyle = 'lightpink';
    ctx.beginPath();
    ctx.arc(numberX, numberY, radius/8 , 0, Math.PI * 2, false);
    ctx.fill();
  }
}

function createNumbers(ctx, width, height, radius) {
  for (let i = 1; i <= 12; i++) {
    let numberRadius = radius * 0.77;
    let numberX = width / 2 + numberRadius * Math.sin(i * 0.523);
    let numberY = height / 2 - numberRadius * Math.cos(i * 0.523);
    ctx.font = '35px Sans-Serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';
    ctx.fillText(`${i}`, numberX, numberY + 2);
  }
}
function createhand(ctx, cx, cy, length, width, color, timezone) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  let angle = getAngle(length, timezone);
  let x = cx + length * Math.sin((angle * Math.PI) / 180);
  let y = cy - length * Math.cos((angle * Math.PI) / 180);
  ctx.lineTo(x, y);
  ctx.stroke();
}
function getAngle(length, timezone) {
  let time = getDate(timezone);
  if (length === 90) {
    return (time.hour + time.min / 60 + time.sec / 3600) * 30;
  }
  if (length === 130) {
    return time.min * 6;
  }
  if (length === 180) {
    return time.sec * 6;
  }
}
function createDigitalClock(ctx, cx, height, timezone) {
  let time = getDate(timezone);
  let fullTime = `${time.hour}:${time.min}:${time.sec}`;
  let index = 0.35;
  ctx.font = '35px Sans-Serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText(fullTime, cx, height * index);
}
function getDate(timezone) {
  let date = new Date();
  return {
    hour: date.getUTCHours() + timezone,
    min: date.getUTCMinutes(),
    sec: date.getUTCSeconds()
  };
}
