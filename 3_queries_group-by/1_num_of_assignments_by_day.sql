SELECT assignments.day as day, count(assignments.id) as total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;