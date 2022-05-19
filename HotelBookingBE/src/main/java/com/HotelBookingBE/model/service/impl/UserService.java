package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.dao.IUSerDao;
import com.HotelBookingBE.model.dao.impl.UserDao;
import com.HotelBookingBE.model.service.IUserService;

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
	@Override
	public void saveUser(UserModel u) {
		u.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		u.setRoleId(1L);
		Long id = userDao.save(u);
	}
	@Override
	public UserModel findOne(UserModel user) {
		return userDao.findOne(user);
	}
	@Override
	public void updateUser(UserModel u) {
		u.setModifiedDate(new Timestamp(System.currentTimeMillis()));
		 userDao.updateUser(u);
	}
	@Override
	public UserModel findOne(Long user_id) {
		return userDao.findOne(user_id);
	}

	
}
