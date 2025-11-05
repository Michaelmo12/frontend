import React from 'react';

function ScoreList() {
  const students = [
    { name: 'John Smith', score: 95 },
    { name: 'Sarah Johnson', score: 87 },
    { name: 'Michael Brown', score: 92 },
    { name: 'Emily Davis', score: 78 },
    { name: 'David Wilson', score: 91 },
    { name: 'Jessica Martinez', score: 85 }
  ];

  return (
    <div className="score-list">
      <h2>Student Scores</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.score} {student.score > 90 && 'Excellent'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreList;
