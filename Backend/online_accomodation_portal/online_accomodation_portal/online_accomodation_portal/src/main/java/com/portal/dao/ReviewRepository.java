package com.portal.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portal.entities.PropertyReview;

public interface ReviewRepository  extends JpaRepository<PropertyReview ,Long >{

}
