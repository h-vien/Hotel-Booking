package com.HotelBookingBE.service.impl;

import java.util.List;
import com.HotelBookingBE.dao.impl.*;
import com.HotelBookingBE.dao.IUSerDao;
import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.service.IUserService;

public class UserService implements IUserService {

	public IUSerDao userDao;
	public UserService()
	{
		userDao = new UserDao();
	}
	@Override
	public List<UserModel> findAllUser() {
		List<UserModel> result = userDao.findAll();
		return result;
	}
	
}
