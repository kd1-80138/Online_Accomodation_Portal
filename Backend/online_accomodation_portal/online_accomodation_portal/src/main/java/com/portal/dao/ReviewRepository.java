package com.portal.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portal.entities.Property;
import com.portal.entities.PropertyReview;

public interface ReviewRepository  extends JpaRepository<PropertyReview ,Long >{
	
	List<PropertyReview> findByProperty(Property p1);

}
