// src/components/StudentSearch.js

import React, { useState } from 'react';
import axios from 'axios';

const StudentSearch = ({ setStudent }) => {
  const [studentId, setStudentId] = useState('');

  const handleSearch = () => {
    axios.get(`/students/${studentId}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error searching student:', error));
  };

  return (
    <div className="student-search">
      <h2>Search Student</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default StudentSearch;
