const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'bootcampx'
});


pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  
  for (let students of res.rows) {
    console.log(`${students.name} has an id of ${students.id} and was in the ${students.cohort} cohort.`)
  }
})
.catch(err => console.error('query error', err.stack));