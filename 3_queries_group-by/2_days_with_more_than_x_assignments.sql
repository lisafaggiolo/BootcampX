SELECT assignments.day as day, count(*) as total_assignments
FROM assignments
GROUP BY day
HAVING COUNT(assignments) > 10
ORDER BY day;