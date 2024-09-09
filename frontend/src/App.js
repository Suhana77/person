import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const refreshStudents = () => {
    // Logic to refresh students
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <StudentForm refreshStudents={refreshStudents} />
    </div>
  );
}

export default App;
