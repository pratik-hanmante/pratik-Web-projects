const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const timerDisplay = document.querySelector('.timer');

let countdown;
let isTimerRunning = false;

function startTimer(duration) {
  const startTime = Date.now();
  const endTime = startTime + duration * 1000;

  displayTimeLeft(duration);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      isTimerRunning = false;
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);

  isTimerRunning = true;
}

function displayTimeLeft(timeLeft) {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timerDisplay.textContent = `${minutes}:${seconds}`;
  document.title = `${minutes}:${seconds} Pomodoro Timer`;
}

startButton.addEventListener('click', () => {
  if (!isTimerRunning) {
    startTimer(3000); // 50 minutes = 3000 seconds
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(countdown);
  isTimerRunning = false;
  timerDisplay.textContent = `50:00`;
  document.title = `Pomodoro Timer`;
});
