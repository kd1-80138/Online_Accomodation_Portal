package com.portal.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.portal.dto.AddPropertyDto;
import com.portal.dto.PropertyResponseDto;


public interface PropertyService {
	
	Boolean addProperty(AddPropertyDto dto) ;

	boolean deleteProperty(Long propertyId);

	List<PropertyResponseDto> getPropertyList(String city);
}
