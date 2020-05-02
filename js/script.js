class CountdownTimer {
    constructor() {
        const defaultDate = '2020-01-17 00:00:00';
        const targetDate = prompt('Enter your target time', '2020-01-17 00:00:00');
        this.perimeter = Math.PI * 2 * $('circle').attr('r');
        this.targetDate = new Date(targetDate || defaultDate);
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;

        $('.countdown-bar').css({
            strokeDasharray: this.perimeter,
        });

        this.tick();
    }

    get day() {
        return this._day;
    }

    set day(day) {
        this._day = day;

        $('#dayBar').css({
            strokeDashoffset: (365 - this._day) / 365 * this.perimeter,
        });

        $('#day').text(this._day);
    }

    get hour() {
        return this._hour;
    }

    set hour(hour) {
        this._hour = hour;

        $('#hourBar').css({
            strokeDashoffset: (24 - this._hour) / 24 * this.perimeter,
        });

        $('#hour').text(this._hour);
    }

    get minute() {
        return this._minute;
    }

    set minute(minute) {
        this._minute = minute;

        $('#minuteBar').css({
            strokeDashoffset: (60 - this._minute) / 60 * this.perimeter,
        });

        $('#minute').text(this._minute);
    }

    get second() {
        return this._second;
    }

    set second(second) {
        this._second = second;

        $('#secondBar').css({
            strokeDashoffset: (60 - this._second) / 60 * this.perimeter,
        });

        $('#second').text(this._second);
    }

    tick() {
        this.interval = requestAnimationFrame(() => {
            let duration = Math.floor((this.targetDate.getTime() - Date.now()) / 1000);
            this.day = Math.floor(duration / (60 * 60 * 24));
            this.hour = Math.floor(duration % (60 * 60 * 24) / (60 * 60));
            this.minute = Math.floor((duration % (60 * 60)) / 60);
            this.second = duration % 60;

            this.tick();
        });
    }
}

const countdownTimer = new CountdownTimer;
