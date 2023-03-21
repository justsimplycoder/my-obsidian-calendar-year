import CalendarYear from './CalendarYear.js';
import markdownFile from './markdownFile.js';

const currentDate = new Date().getFullYear();
const calendar = new CalendarYear(currentDate);

const inputYear = document.querySelector('#input-year');
inputYear.value = currentDate;

const calendarHTML = document.querySelector("#calendar");
calendarHTML.innerHTML = markdownFile(calendar);

const btnGenerate = document.querySelector('#btn-generate');
btnGenerate.addEventListener('click', event => {
  const year = inputYear.value;
  if(year.match(/\d{4}/) && year.length === 4) {
    inputYear.classList.remove('is-error');
    calendar.date = year;
    calendarHTML.innerHTML = markdownFile(calendar);
    return true;
  }
  inputYear.classList.add('is-error');
  calendarHTML.innerHTML = 'Ошибка! \nГод введён неверно.'
  return false;
});

const btnCopyCode = document.querySelector('#btn-copy-code');
btnCopyCode.addEventListener('click', () => {
  document.getSelection().setBaseAndExtent(calendarHTML, 0, calendarHTML, calendarHTML.childNodes.length);
  document.execCommand("copy");
});
