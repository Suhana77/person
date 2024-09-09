// src/components/StudentList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get('/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.studentId}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
