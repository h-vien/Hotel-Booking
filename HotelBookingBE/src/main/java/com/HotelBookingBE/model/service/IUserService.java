package com.HotelBookingBE.model.service;

import java.util.List;

import com.HotelBookingBE.model.ShortUserModel;
import com.HotelBookingBE.model.UserModel;

public interface IUserService {
	List<UserModel> findAllUser();
	Long saveUser(UserModel u);
	UserModel findOne(UserModel user);
	UserModel findOne(Long user_id);
	ShortUserModel findOneShortModel(UserModel user);
	void updateUser(UserModel u);
}
