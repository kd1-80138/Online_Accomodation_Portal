package com.portal.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.dao.PropertyRepository;
import com.portal.dao.ReviewRepository;
import com.portal.dao.UserDao;
import com.portal.dto.ReviewDto;
import com.portal.entities.Property;
import com.portal.entities.PropertyReview;
import com.portal.entities.User;
import com.portal.exception.CustomException;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewRepository reviewRepo;

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PropertyRepository propertyRepo;

	@Autowired
	private UserDao userDao;

	@Override
	public String addReview(ReviewDto dto) {

		System.out.println(dto.toString());
		Property property = propertyRepo.findById(dto.getPropertyId())
				.orElseThrow(() -> new CustomException("Property Not Found"));
		User user = userDao.findById(dto.getUserId()).orElseThrow(() -> new CustomException("user not found"));
		PropertyReview review = mapper.map(dto, PropertyReview.class);
		review.setProperty(property);
		review.setUser(user);
		reviewRepo.save(review);
		return "Review  Added Successfully";
	}

}
