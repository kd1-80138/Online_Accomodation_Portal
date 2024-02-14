package com.portal.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.portal.entities.User;

public interface UserDao extends JpaRepository<User, Long> {

	public User findByEmail(String email);

}
