package com.portal.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portal.service.BookingService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/book")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> bookProperty(@RequestBody Long propertyId, @RequestParam Long userId){
	
		
		LocalDateTime bookingDateTime= bookingService.bookProperty(userId, propertyId);
		
		return ResponseEntity.status(HttpStatus.OK).body(bookingDateTime);
	}
	
	
	

	

}
