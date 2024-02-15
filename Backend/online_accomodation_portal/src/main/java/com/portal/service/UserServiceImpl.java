package com.portal.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.portal.exception.ResourceNotFoundException;
import com.portal.dao.UserDao;
import com.portal.dto.ApiResponse;
import com.portal.dto.ApprovedDTO;
import com.portal.dto.EditPasswordDTO;
import com.portal.dto.LoginDto;
import com.portal.dto.PropertyResponseDto;
import com.portal.dto.Signup;
import com.portal.dto.UserDTO;
import com.portal.dto.UserResponseDto;
import com.portal.dto.UserUpdateDTO;
import com.portal.entities.Status;
import com.portal.entities.User;
import com.portal.entities.UserRole;
import com.portal.exception.CustomException;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PasswordEncoder encoder;

	public UserServiceImpl() {
		System.out.println("in a cotr " + getClass());
	}

	// add new user
	@Override
	public UserDTO addNewUser(UserDTO dto) {

		// if (dto.getPassword().equals(dto.getConfirmPassword())) {
		User user = mapper.map(dto, User.class);

		System.out.println("in add service " + user.getRole());
		userdao.save(user);
		return mapper.map(user, UserDTO.class);
		// }
		// throw new ApiException("Password Invalid Try Again ");
	}

	// update user
	@Override
	public UserUpdateDTO updateUserDetails(UserUpdateDTO user) {
		User user2 = userdao.findById(user.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Id or Not yet assigned "));

		mapper.map(user, user2);

		userdao.save(user2);

		return mapper.map(user2, UserUpdateDTO.class);
	}

	// get user by id;
	@Override
	public UserDTO getById(Long id) {
		User user = userdao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Id"));
		return mapper.map(user, UserDTO.class);
	}

	// sign in /login
	@Override
	public ApiResponse Signin(LoginDto req) {
		User user = userdao.findByEmailAndPassword(req.getEmail(), req.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("invalid email or Password....!"));
		System.out.println(user);
		mapper.map(user, LoginDto.class);
		return new ApiResponse("Successfuly Loged In");
	}

	// change password
	@Override
	public String editCustomerPassword(EditPasswordDTO pass) {

		User cust = userdao.findById(pass.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid User Id"));
		if (cust.getPassword().equals(pass.getOldpassword())) {
			cust.setPassword(pass.getNewpaasword());
			return "Password changed successfully";
		}
		return "Invalid email or old password";
	}

	@Override
	public void removeUserById(Long userId) {
		User user = userdao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid id"));
		userdao.delete(user);
	}

	@Override
	public List<UserDTO> getAllUsers() {

		List<User> usersList = userdao.findAll();

		List<UserDTO> userDTOList = new ArrayList<UserDTO>();

		userDTOList = Arrays.asList(mapper.map(usersList, UserDTO[].class));

		return userDTOList;
	}

	@Override
	public List<UserDTO> showPendingList() {

		List<UserDTO> userDTOList = new ArrayList<UserDTO>();

		List<User> list = userdao.findByStatus(Status.PENDING);

		userDTOList = Arrays.asList(mapper.map(list, UserDTO[].class));

		return userDTOList;
	}

	@Override
	public List<UserDTO> showApprovedList() {
		List<UserDTO> userDTOList = new ArrayList<UserDTO>();

		List<User> list = userdao.findByStatus(Status.APPROVED);

		userDTOList = Arrays.asList(mapper.map(list, UserDTO[].class));

		return userDTOList;
	}

	@Override
	public List<UserDTO> showRejectedList() {
		List<UserDTO> userDTOList = new ArrayList<UserDTO>();

		List<User> list = userdao.findByStatus(Status.REJECTED);

		userDTOList = Arrays.asList(mapper.map(list, UserDTO[].class));

		return userDTOList;
	}

	@Override
	public UserResponseDto verifyRoleTOApprove(ApprovedDTO approveddto) {

		User user = userdao.findById(approveddto.getUserId())
				.orElseThrow(() -> new CustomException("Invalid Id Plz Try Again"));
		user.setRole(approveddto.getRole());
		user.setStatus(approveddto.getStatus());

		userdao.save(user);

		return mapper.map(user, UserResponseDto.class);
	}

	// jwt
	@Override
	public Signup userRegistration(Signup reqDTO) {
		// dto --> entity
		User user = mapper.map(reqDTO, User.class);
		user.setPassword(encoder.encode(user.getPassword()));// pwd : encrypted using SHA
		return mapper.map(userdao.save(user), Signup.class);
	}

	@Override
	public List<UserDTO> getAllOwners() {
		List<User> ownersList = userdao.findByRole(UserRole.ROLE_OWNER);
		List<UserDTO> ownersRespList = ownersList.stream().map(user -> mapper.map(user, UserDTO.class))
				.collect(Collectors.toList());
		return ownersRespList;
	}

	@Override
	public List<UserDTO> getAllCustomers() {
		List<User> customersList = userdao.findByRole(UserRole.ROLE_CUSTOMER);
		List<UserDTO> customersRespList = customersList.stream().map(user -> mapper.map(user, UserDTO.class))
				.collect(Collectors.toList());
		return customersRespList;
	}
}
