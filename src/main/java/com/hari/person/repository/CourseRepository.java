package com.hari.person.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hari.person.model.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}
