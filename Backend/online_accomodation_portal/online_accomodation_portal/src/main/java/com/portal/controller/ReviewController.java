package com.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portal.dto.ReviewDto;
import com.portal.dto.ReviewResponseDTO;
import com.portal.dto.UpdateReviewDTO;
import com.portal.service.ReviewService;


@RestController
@RequestMapping("/reviews")
public class ReviewController {
	
	@Autowired 
	private  ReviewService reviewService;
	
	//add new review
	//http:/localhost:8080/reviews/add
	@PostMapping("/add")
	public ResponseEntity<?> addReview (@RequestBody ReviewDto   dto){
		//System.out.println(dto.toString());
		return ResponseEntity.status(HttpStatus.OK).body(reviewService.addReview(dto));
		
	}
	
	//incomplete method
	//get reviews by property id
	//http:/localhost:8080/reviews/{propertyId}
	@GetMapping("/{propertyId}")
	public List<ReviewResponseDTO> showAllReviews(@RequestParam Long propertyId){
		return reviewService.fetchAllReviews(propertyId);	
	}
	
	//delete review
	//http:/localhost:8080/reviews/delete/{reviewId}
	@PostMapping("/delete/{reviewId}")
	public ResponseEntity<?> deleteReview(@RequestParam Long reviewId ){
		return ResponseEntity.status(HttpStatus.OK).body(reviewService.deleteReview(reviewId));
	}
		
		
	//delete review
	//http:/localhost:8080/reviews/update
	@PutMapping("/update")
	public ResponseEntity<?> updateReview (@RequestBody UpdateReviewDTO dto) {
		return ResponseEntity.status(HttpStatus.OK).body(reviewService.updateReview(dto));
	}
	

}
