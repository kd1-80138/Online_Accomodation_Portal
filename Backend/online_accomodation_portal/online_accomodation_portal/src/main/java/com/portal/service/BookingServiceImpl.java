package com.portal.service;

import java.time.LocalDateTime;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.dao.BookingRepository;
import com.portal.dao.PropertyRepository;
import com.portal.dao.UserDao;
import com.portal.entities.Property;
import com.portal.entities.PropertyBooking;
import com.portal.entities.User;
import com.portal.exception.CustomException;


@Service
@Transactional
public class BookingServiceImpl implements BookingService{
	
	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PropertyRepository propertyRepo; 
	
	

	@Override
	public LocalDateTime bookProperty(Long userId, Long propertyId) {
		
		User user = userDao.findById(userId).orElseThrow(()->new CustomException("Invalid User"));
		Property property = propertyRepo.findById(propertyId).orElseThrow(()->new CustomException("Invalid Property"));
		PropertyBooking propertyBooking = new PropertyBooking();
		propertyBooking.setFlatCategoryId(property.getCategory());
		propertyBooking.setPropertyId(property);
		propertyBooking.setUserId(user);
		propertyBooking.setBookingDateTime(LocalDateTime.now());
		bookingRepo.save(propertyBooking);
		property.setIsAvailable(false);
			propertyRepo.save(property);
				return propertyBooking.getBookingDateTime();
	}

}
