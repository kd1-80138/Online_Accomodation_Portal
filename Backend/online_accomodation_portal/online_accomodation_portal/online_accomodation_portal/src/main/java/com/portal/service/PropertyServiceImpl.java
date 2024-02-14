package com.portal.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.dao.CityRepository;
import com.portal.dao.FlatCategoryRepository;
import com.portal.dao.PropertyRepository;
import com.portal.dao.UserDao;
import com.portal.dto.AddPropertyDto;
import com.portal.dto.PropertyResponseDto;
import com.portal.entities.City;
import com.portal.entities.FlatCategory;
import com.portal.entities.Property;
import com.portal.entities.User;
import com.portal.exception.CustomException;

@Service
@Transactional
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private PropertyRepository propertyRepo;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private CityRepository cityRepo;

	@Autowired
	private FlatCategoryRepository flatRepo;

	@Autowired
	private UserDao userDao;

	@Override
	public Boolean addProperty(AddPropertyDto dto) {

		System.out.println(dto.toString());

		Property property = mapper.map(dto, Property.class);
		User user = userDao.findById(dto.getUserId()).orElseThrow(() -> new CustomException("User Invalid"));

		property.setUser(user);

		City city = cityRepo.findByCityName(dto.getCityName());
		System.out.println(city.toString());
		if (city == null) {
			return false;
		} else {
			property.setCity(city);

		}
		FlatCategory flatCategory= flatRepo.findByCategoryNameAndDescription(dto.getCategoryName(),dto.getDescription());
		if(flatCategory==null ) { 
		flatCategory = mapper.map(dto, FlatCategory.class);
		System.out.println(flatCategory.toString());
		flatRepo.save(flatCategory);
		}
		System.out.println(flatCategory.toString());

		property.setCategory(flatCategory);

		System.out.println(flatCategory.toString());
		propertyRepo.save(property);
		System.out.println(property.getSociety() + " " + property.getIsAvailable());

		if (property == null)
			return false;

		return true;
	}

	@Override
	public boolean deleteProperty(Long propertyId) {

		Property property = propertyRepo.findById(propertyId)
				.orElseThrow(() -> new CustomException("Property Not Found"));

		if (property == null)
			return false;
		property.setCategory(null);
		property.setCity(null);
		property.setUser(null);

		propertyRepo.delete(property);

		return true;
	}

	@Override
	public List<PropertyResponseDto> getPropertyList(String city) {
		City cityEntity = cityRepo.findByCityName(city);
		if (cityEntity == null)
			return null;

		List<Property> propertyResp = propertyRepo.findByCityAndIsAvailable(cityEntity, true);
		List<PropertyResponseDto> propertyList = propertyResp.stream()
				.map(property -> mapper.map(property, PropertyResponseDto.class)).collect(Collectors.toList());
		return propertyList;
	}

}
