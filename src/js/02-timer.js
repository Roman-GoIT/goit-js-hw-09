import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const calendar = document.querySelector('#datetime-picker');

startBtn.disabled = true;

// Options for "flatpickr"
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      const currentTime = Date.now();
      const selectedDate = selectedDates[0].getTime();
      let timeDifference = selectedDate - currentTime;
      startBtn.addEventListener('click', onStart);

      let timerId;
      function onStart() {
        startBtn.disabled = true;
        timerId = setTimeout(function countDown() {
          timeDifference -= 1000;
          const { days, hours, minutes, seconds } = convertMs(timeDifference);
          dataDays.textContent = addLeadingZero(days);
          dataHours.textContent = addLeadingZero(hours);
          dataMinutes.textContent = addLeadingZero(minutes);
          dataSeconds.textContent = addLeadingZero(seconds);
          if (timeDifference > 0) {
            setTimeout(countDown, 1000);
          }
        }, 1000);
      }
    }
  },
};
// flatpickr function
const fp = flatpickr(calendar, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
