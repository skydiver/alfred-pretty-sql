const sqlFormatter = require('sql-formatter');

if (process.argv[2]) {
  console.log(sqlFormatter.format('SELECT * FROM table1'));
}
