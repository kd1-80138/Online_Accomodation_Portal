package com.portal.dto;

import javax.persistence.AccessType;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.portal.entities.Status;
import com.portal.entities.User;

public class UserResponseDto {
	
	@JsonProperty(access = Access.READ_WRITE)
	private Long id ;
	@JsonProperty(access = Access.READ_WRITE)
	private String  firstName;
	@JsonProperty(access = Access.READ_WRITE)
	private String lastName;
	@JsonProperty(access = Access.READ_WRITE)
	private String email;
	@JsonProperty(access = Access.READ_WRITE)
	private Status status;
	@JsonProperty(access = Access.READ_WRITE)
	private User userType;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public User getUserType() {
		return userType;
	}
	public void setUserType(User userType) {
		this.userType = userType;
	}
	@Override
	public String toString() {
		return "UserResponseDto [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", status=" + status + ", userType=" + userType + "]";
	}
	
	

}
