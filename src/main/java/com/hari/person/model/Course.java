package com.hari.person.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class Course implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;

    @Column(unique = true, nullable = false)
    private String enrollmentCourse;

    private String courseStatus;

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getEnrollmentCourse() {
		return enrollmentCourse;
	}

	public void setEnrollmentCourse(String enrollmentCourse) {
		this.enrollmentCourse = enrollmentCourse;
	}

	public String getCourseStatus() {
		return courseStatus;
	}

	public void setCourseStatus(String courseStatus) {
		this.courseStatus = courseStatus;
	}

    // Getters and setters
}
