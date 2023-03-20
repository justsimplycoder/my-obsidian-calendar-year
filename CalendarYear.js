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

export default CalendarYear;