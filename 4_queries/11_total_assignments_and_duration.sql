SELECT day, sum(assignments.id), sum(duration)
FROM assignments
GROUP BY day
ORDER BY day;