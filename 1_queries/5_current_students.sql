SELECT name, id, cohort_id
FROM students
WHERE end_date IS null
ORDER by cohort_id;