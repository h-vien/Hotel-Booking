package com.HotelBookingBE.model.service;

import java.util.List;

import com.HotelBookingBE.model.UserModel;

public interface IUserService {
	List<UserModel> findAllUser();
	void saveUser(UserModel u);
	UserModel findOne(UserModel user);
	UserModel findOne(Long user_id);
	void updateUser(UserModel u);
}
