package com.hari.person.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hari.person.model.Student;



public interface StudentRepository extends JpaRepository<Student, Integer> {
}