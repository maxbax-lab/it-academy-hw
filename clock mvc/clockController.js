export class Controller {
  constructor(model) {
    this.model = model;
  }
  startClock() {
    this.model.start()
  }
  stopClock() {
    this.model.stop()
  }
  init(field) {
    this.field = field;
    window.addEventListener('load', this.startClock());
    this.start = this.field.querySelector('.start');
    this.start.addEventListener('click', this.startClock());
    this.stop = this.field.querySelector('.stop');
    this.stop.addEventListener('click', this.stopClock());
  }
}