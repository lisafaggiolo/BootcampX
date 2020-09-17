const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const values = [`%${cohortName}%`];
const queryString =`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE LOWER(cohorts.name) LIKE LOWER($1)
ORDER BY teacher;
`
pool.query(queryString, values)
.then(res => {
  console.log(res.rows)
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
  
})
.catch(err => console.error('query error', err.stack));

