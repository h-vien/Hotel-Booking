package com.HotelBookingBE.service;

import java.util.List;

import com.HotelBookingBE.model.UserModel;

public interface IUserService {
	List<UserModel> findAllUser();
}
