let timerInterval;
let timerTime = 0;

function startTimer() {
    const input = document.getElementById('timer-input').value;
    const parts = input.split(':');
    if (parts.length === 3) {
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const seconds = parseInt(parts[2], 10);
        if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
            timerTime = (hours * 3600) + (minutes * 60) + seconds;
            stopTimer();
            timerInterval = setInterval(() => {
                if (timerTime > 0) {
                    timerTime--;
                    document.getElementById('timer-display').innerText = formatTime(timerTime);
                } else {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    document.getElementById('timer-display').innerText = '00:00:00';
}

let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    stopStopwatch();
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById('stopwatch-display').innerText = formatStopwatchTime(stopwatchTime);
    }, 10);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').innerText = '00:00:00:000';
}

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function formatStopwatchTime(milliseconds) {
    const ms = String(milliseconds % 100).padStart(3, '0');
    const totalSeconds = Math.floor(milliseconds / 100);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}:${ms}`;
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}