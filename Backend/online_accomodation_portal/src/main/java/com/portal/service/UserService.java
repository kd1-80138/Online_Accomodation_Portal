package com.portal.service;

import java.util.List;

import com.portal.dto.ApiResponse;
import com.portal.dto.ApprovedDTO;

import com.portal.dto.EditPassDTO;
import com.portal.dto.EditPasswordDTO;
import com.portal.dto.LoginDto;
import com.portal.dto.OTPVerificationDTO;

import com.portal.dto.LoginDto;

import com.portal.dto.Signup;
import com.portal.dto.UserDTO;
import com.portal.dto.UserResponseDto;
import com.portal.dto.UserUpdateDTO;

public interface UserService {

	UserDTO addNewUser(UserDTO dto);

	UserUpdateDTO updateUserDetails(UserUpdateDTO user);

	UserDTO getById(Long id);

	ApiResponse Signin(LoginDto request);

	String editCustomerPassword(EditPasswordDTO password);

	void removeUserById(Long userId);

	List<UserDTO> getAllUsers();

	List<UserDTO> showPendingList();

	List<UserDTO> showApprovedList();

	List<UserDTO> showRejectedList();

	UserResponseDto verifyRoleTOApprove(ApprovedDTO approveddto);

	Signup userRegistration(Signup reqDTO);

	List<UserDTO> getAllOwners();

	List<UserDTO> getAllCustomers();

	void getotpForForgotPass(String email);
	
	boolean verifyOTP(OTPVerificationDTO otpVerificationDTO);
	
	boolean forgotchangePassword(EditPassDTO changePasswordDTO);


}
