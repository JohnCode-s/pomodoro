const display = document.querySelector('.display');
const text = document.querySelector('.text');
const check = document.querySelector('.check');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

const PINK = "#e2979c";
const RED = "#e7305b";
const GREEN = "#9bdeac";
const YELLOW = "#f7f5dd";
const FONT_NAME = "Courier";
const WORK_MIN = 1;
const SHORT_BREAK_MIN = 5;
const LONG_BREAK_MIN = 20;
let repetitions = 0;
var timer = null;


function start_timer() {
    repetitions += 1;
    let work_sec = WORK_MIN * 60;
    let short_break_sec = SHORT_BREAK_MIN * 60
    let long_break_sec = LONG_BREAK_MIN * 60

    if (repetitions % 8 == 0) {
        count_down(long_break_sec);
        text.innerHTML = "Break";
        text.style.color = RED;
    }
    else if (repetitions % 2 == 0) {
        count_down(short_break_sec);
        text.innerHTML = "Short Break";
        text.style.color = PINK;
    }
    else {
        count_down(work_sec);
        text.innerHTML = "Work";
        text.style.color = GREEN;
    }

}

function count_down(count) {
    let count_min = Math.floor(count / 60);
    let count_sec = count % 60;

    if (count_sec < 10) {
        count_sec = `0${count_sec}`;
    }

    display.textContent = `${count_min}:${count_sec}`;
    if (count > 0) {
        timer = setInterval(() => {
            
            count_down(count);
            console.log(count);
        }, 1000);
        count = count - 1;
    }
    else {
        start_timer();
        //let marks = ""
        let work_sessions = Math.floor(repetitions / 2)
        for ( i in range(work_sessions)) {
            check.checked;
        }
        
    }

}

function reset_timer() {
    clearInterval(timer);
    display.innerHTML = "00:00";
    text.innerHTML = "Timer"
    check.checked = "";
    repetitions = 0
}

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    start.addEventListener('click', function () {
        start_timer();
    });
    reset.addEventListener('click', function () {
        console.log('reset');
        reset_timer()
    });

});