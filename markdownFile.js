function markdownFile(calendar) {
let str = `
# &lt;div class="my-calendar-header"&gt;Календарь 2023&lt;/div&gt;
\`\`\`dataviewjs

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


/* ------------------------------------------------------ */

const currentDate = new Date();

const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const reStr = new RegExp(\`\\[($\{currentDay\})\\](\\(\\d{4}-\\d{2}-\\d{2}\\))\`);

YEAR.set(currentMonth, YEAR.get(currentMonth).replace(reStr, "[==$1==]$2"));

const htmlCalendarYear = \`&lt;div class="my-calendar-year"&gt;

&lt;div&gt;
&lt;p&gt;Январь&lt;/p&gt;
$\{$= YEAR.get(1)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Февраль&lt;/p&gt;
$\{$= YEAR.get(2)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Март&lt;/p&gt;
$\{$= YEAR.get(3)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Апрель&lt;/p&gt;
$\{$= YEAR.get(4)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Май&lt;/p&gt;
$\{$= YEAR.get(5)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Июнь&lt;/p&gt;
$\{$= YEAR.get(6)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Июль&lt;/p&gt;
$\{$= YEAR.get(7)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Август&lt;/p&gt;
$\{$= YEAR.get(8)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Сентябрь&lt;/p&gt;
$\{$= YEAR.get(9)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Октябрь&lt;/p&gt;
$\{$= YEAR.get(10)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Ноябрь&lt;/p&gt;
$\{$= YEAR.get(11)\}
&lt;/div&gt;
&lt;div&gt;
&lt;p&gt;Декабрь&lt;/p&gt;
$\{$= YEAR.get(12)\}
&lt;/div&gt;
&lt;/div&gt;\`;

await dv.el("div", htmlCalendarYear);
\`\`\`
`;

return str;
}

export default markdownFile;