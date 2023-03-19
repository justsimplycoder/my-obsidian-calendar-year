class CalendarYear {
  constructor(year) {
    this.date = new Date(year);
  }

  #getNameFile() {
    let year = this.date.getFullYear();

    let month = this.date.getMonth() + 1;
    if(month < 10) month = '0' + month;
    let day = this.date.getDate();
    if(day < 10) day = '0' + day;

    return `${year}-${month}-${day}`;
  }

  #getAliasFile() {
    return `${this.date.getDate()}`;
  }

  #getWikiLink() {
    const aliasFile = this.#getAliasFile();
    if (aliasFile < 10) {
      return ` [${this.#getAliasFile()}](${this.#getNameFile()})`;
    }
    return `[${this.#getAliasFile()}](${this.#getNameFile()})`;
  }

  getCalendarMarkdown(month) {
    month = --month;

    let table = `|        пн        |        вт        |        ср        |        чт        |        пт        |        сб        |        вс        |\n| :--------------: | :--------------: | :--------------: | :--------------: | :--------------: | :--------------: | :--------------: |`;
    for (let cell = 0; cell < 6; cell++) {
      table += '\n|';
      for (let day = 1; day < 8; day++) {
        if (
          this.date.getMonth() == month &&
          (this.date.getDay() == day ||
            (this.date.getDay() == 0 && day == 7)
          )
        ) {
          table += ` ${this.#getWikiLink()} |`
          this.date.setDate(1 + this.date.getDate());
        } else {
          table += '                  |'
        }
      }
    }

    return table;
  }
}



function codeObsidian(calendar) {
let str = `
const YEAR = new Map();

YEAR.set(1, \`
${calendar.getCalendarMarkdown(1)}
\`)

YEAR.set(2, \`
${calendar.getCalendarMarkdown(2)}
\`)

YEAR.set(3, \`
${calendar.getCalendarMarkdown(3)}
\`)

YEAR.set(4, \`
${calendar.getCalendarMarkdown(4)}
\`)

YEAR.set(5, \`
${calendar.getCalendarMarkdown(5)}
\`)

YEAR.set(6, \`
${calendar.getCalendarMarkdown(6)}
\`)

YEAR.set(7, \`
${calendar.getCalendarMarkdown(7)}
\`)

YEAR.set(8, \`
${calendar.getCalendarMarkdown(8)}
\`)

YEAR.set(9, \`
${calendar.getCalendarMarkdown(9)}
\`)

YEAR.set(10, \`
${calendar.getCalendarMarkdown(10)}
\`)

YEAR.set(11, \`
${calendar.getCalendarMarkdown(11)}
\`)

YEAR.set(12, \`
${calendar.getCalendarMarkdown(12)}
\`)
  `;

return str;
}

const currentDate = new Date().getFullYear();
const calendar = new CalendarYear(`${currentDate}`);

const calendarHTML = document.querySelector("#calendar");
calendarHTML.innerHTML = codeObsidian(calendar);

const inputYear = document.querySelector('#input-year');
inputYear.value = currentDate;

const btnGenerate = document.querySelector('#btn-generate');
btnGenerate.addEventListener('click', event => {
  event.preventDefault();
  const year = inputYear.value;
  if(year.match(/\d{4}/) && year.length === 4) {
    const calendar = new CalendarYear(year);
    calendarHTML.innerHTML = codeObsidian(calendar);
  }
  return 'null';
});