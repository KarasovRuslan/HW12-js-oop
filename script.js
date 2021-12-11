let time = document.getElementById('clockTime')

class Clock {
    constructor(setTime) {
        this.e = setTime;
        this.e.addEventListener('click', () => this.timeSwitch());
        this.isFullFormat = true;
    };

    render() {
        this.date = new Date()
        this.hours = this.date.getHours() < 10 ? '0' + this.date.getHours() : this.date.getHours();
        this.minutes = this.date.getMinutes() < 10 ? '0' + this.date.getMinutes() : this.date.getMinutes();
        this.seconds = this.date.getSeconds() < 10 ? '0' + this.date.getSeconds() : this.date.getSeconds(); 

        this.e.innerText = this.isFullFormat ? + this.hours + ":" + this.minutes + ":" + this.seconds : this.hours + ":" + this.minutes;
    };

    timeSwitch() {
        this.isFullFormat = !this.isFullFormat
    };
};

let clock = new Clock(time);
clock.render()
setInterval(() => clock.render(), 250); 