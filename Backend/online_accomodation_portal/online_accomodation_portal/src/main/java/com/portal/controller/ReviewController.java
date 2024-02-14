package com.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portal.dto.ReviewDto;
import com.portal.service.ReviewService;


@RestController
@RequestMapping("/reviews")
public class ReviewController {
	
	@Autowired 
	private  ReviewService reviewService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addReview (@RequestBody ReviewDto   dto){
		
		System.out.println(dto.toString());
		
		
		
		return ResponseEntity.status(HttpStatus.OK).body(reviewService.addReview(dto));
		
	}
	

}
