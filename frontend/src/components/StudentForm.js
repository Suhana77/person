import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ refreshStudents }) => {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    enrollmentDate: '',
    email: '',
    phoneNumber: '',
    enrollmentCourse: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    axios.post('/students', student)
      .then(() => {
        refreshStudents();
        setStudent({
          studentId: '',
          firstName: '',
          lastName: '',
          enrollmentDate: '',
          email: '',
          phoneNumber: '',
          enrollmentCourse: ''
        });
      })
      .catch(error => console.error('Error adding student:', error));
  };

  const handleDelete = () => {
    axios.delete(`/students/${student.studentId}`)
      .then(() => refreshStudents())
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div className="student-form">
      <h2>Add/Delete Student</h2>
      <input
        type="text"
        name="studentId"
        placeholder="Student ID (for delete)"
        value={student.studentId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={student.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={student.lastName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="enrollmentDate"
        placeholder="Enrollment Date"
        value={student.enrollmentDate}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={student.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="enrollmentCourse"
        placeholder="Enrollment Course"
        value={student.enrollmentCourse}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default StudentForm;
