SELECT *
FROM 
(SELECT students.name as student, avg(assignment_submissions.duration)  as average_assignment_duration, avg(assignments.duration)  as average_estimated_duration
FROM assignment_submissions
JOIN students ON students.id = assignment_submissions.student_id
JOIN assignments ON assignments.id = assignment_submissions.assignment_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY average_assignment_duration DESC) as below_average_assignments
WHERE below_average_assignments.average_assignment_duration < below_average_assignments.average_estimated_duration;