function markdownFile(calendar) {
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

export default markdownFile;