export class Model {
    constructor(timezone, view) {
      this.timezone = timezone;
      this.view = view;
    }
    start() {
      this.timer = setInterval(() => {
        this.view.update(this.timezone);
      }, 1000);
    }
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
    updateView() {
      if (this.view) {
        this.view.update(this.timezone);
      }
    }
  }