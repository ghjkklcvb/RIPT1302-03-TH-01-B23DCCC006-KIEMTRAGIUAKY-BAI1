let timeInterval;
let minutes = 0;
let seconds = 0;

function startCountdown() {
    minutes = parseInt(document.getElementById('minutes').value) || 0;
    seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0) {
        alert("Vui lòng nhập thời gian hợp lệ!");
        return;
    }

    updateTimeDisplay();

    clearInterval(timeInterval);
    timeInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    seconds--;

    if (seconds < 0 && minutes > 0) {
        minutes--;
        seconds = 59;
    }

    if (minutes === 0 && seconds === 0) {
        clearInterval(timeInterval);
        alert("Hết giờ!");
        document.getElementById('alarm').play();
    }

    updateTimeDisplay();
}

function updateTimeDisplay() {
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    document.getElementById('timer').innerHTML = `${formattedMinutes}:${formattedSeconds}`;
}

function resetCountdown() {
    clearInterval(timeInterval);
    minutes = 0;
    seconds = 0;
    updateTimeDisplay();
    document.getElementById('alarm').pause(); 
}
