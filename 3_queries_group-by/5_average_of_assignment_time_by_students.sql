SELECT students.name as student, (SUM(assignment_submissions.duration)::FLOAT / COUNT(assignment_submissions.id))  as average_assignment_duration
FROM assignment_submissions
JOIN students ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY average_assignment_duration DESC;