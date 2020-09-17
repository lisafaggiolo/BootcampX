const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'bootcampx'
});


const cohortName = process.argv[2];
const limit = process.argv[3] || 5; 
const values = [`%${cohortName}%`, limit];
const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

pool.query(queryString, values)
.then(res => {
  console.log(res.rows);
  for (let students of res.rows) {
    console.log(`${students.name} has an id of ${students.student_id} and was in the ${students.cohort} cohort.`)
  }
})
.catch(err => console.error('query error', err.stack));
