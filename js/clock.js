class Clock {
  constructor() {
    // 1. Create a Date object.
    this.d = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hour = this.d.getHours();
    this.minutes = this.d.getMinutes();
    this.seconds = this.d.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    const clock = this;
    setInterval(function() {
      clock._tick()
    }, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    if(this.seconds > 59){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes > 59){
      this.minutes = 0;
      this.hours++;
    }
    if(this.hours > 23)
      this.hours = 0;
    this.printTime();
  }
}

const clock = new Clock();