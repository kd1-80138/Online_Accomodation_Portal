package com.portal.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.dao.PropertyRepository;
import com.portal.dao.ReviewRepository;
import com.portal.dao.UserDao;
import com.portal.dto.ReviewDto;
import com.portal.dto.ReviewResponseDTO;
import com.portal.dto.UpdateReviewDTO;
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

	// incomplete
	@Override
	public List<ReviewResponseDTO> fetchAllReviews(Long propertyId) {
		Property property = propertyRepo.findById(propertyId)
				.orElseThrow(() -> new CustomException("property not found"));

		List<PropertyReview> propertyReviewList = reviewRepo.findByProperty(property);

		List<ReviewResponseDTO> responseList = new ArrayList<ReviewResponseDTO>();

		responseList = Arrays.asList(mapper.map(propertyReviewList, ReviewResponseDTO[].class));

		return responseList;
	}

	@Override
	public String deleteReview(Long reviewId) {
		// TODO Auto-generated method stub
		if (reviewRepo.existsById(reviewId)) {
			reviewRepo.deleteById(reviewId);
			return "Review Deleted Successfully";
		} else {
			return "ReviewId Is Invalid";

		}
	}

	@Override
	public String updateReview(UpdateReviewDTO dto) {
		// TODO Auto-generated method stub
		PropertyReview propertyReview = reviewRepo.findById(dto.getReviewId())
				.orElseThrow(() -> new CustomException("Property Not Found"));
		propertyReview = mapper.map(dto, PropertyReview.class);
		reviewRepo.save(propertyReview);
		return "Review updated Successfully";
	}

}
