import React from 'react';

function StudentList() {
  const students = [
    'John Smith',
    'Sarah Johnson',
    'Michael Brown',
    'Emily Davis',
    'David Wilson',
    'Jessica Martinez'
  ];

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
