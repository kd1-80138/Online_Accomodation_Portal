package com.portal.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portal.entities.Status;
import com.portal.entities.User;

public interface UserDao extends JpaRepository<User, Long> {

	public User findByEmail(String email);

	Optional<User> findByEmailAndPassword(String email, String password);

	public List<User> findByStatus(Status statusType);

}
