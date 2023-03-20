import CalendarYear from './CalendarYear.js';
import markdownFile from './markdownFile.js';

const currentDate = new Date().getFullYear();
const calendar = new CalendarYear(`${currentDate}`);

const calendarHTML = document.querySelector("#calendar");
calendarHTML.innerHTML = markdownFile(calendar);

const inputYear = document.querySelector('#input-year');
inputYear.value = currentDate;

const btnGenerate = document.querySelector('#btn-generate');
btnGenerate.addEventListener('click', event => {
  event.preventDefault();
  const year = inputYear.value;
  if(year.match(/\d{4}/) && year.length === 4) {
    inputYear.classList.remove('is-error');
    const calendar = new CalendarYear(year);
    calendarHTML.innerHTML = markdownFile(calendar);
    return true;
  }
  inputYear.classList.add('is-error');
  calendarHTML.innerHTML = 'Ошибка! \nГод введён неверно.'
  return false;
});