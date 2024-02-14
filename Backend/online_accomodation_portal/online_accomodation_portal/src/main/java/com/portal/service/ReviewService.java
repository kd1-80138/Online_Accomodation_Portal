package com.portal.service;

import java.util.List;

import com.portal.dto.ReviewDto;
import com.portal.dto.ReviewResponseDTO;
import com.portal.dto.UpdateReviewDTO;

public interface ReviewService {

	String addReview(ReviewDto dto);
	
	List<ReviewResponseDTO> fetchAllReviews(Long propertyId) ;

	String deleteReview(Long reviewId);

	String updateReview(UpdateReviewDTO dto);

}
