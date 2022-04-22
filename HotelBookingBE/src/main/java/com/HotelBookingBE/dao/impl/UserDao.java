package com.HotelBookingBE.dao.impl;

import java.util.List;

import com.HotelBookingBE.dao.IUSerDao;
import com.HotelBookingBE.mapper.UserMapper;
import com.HotelBookingBE.model.UserModel;

public class UserDao extends AbstractDao<UserModel> implements IUSerDao {

	public UserDao()
	{
		
	}
	@Override
	public List<UserModel> findAll() {
		String sql = "SELECT * FROM user";
		return query(sql,new UserMapper());
	}
	
}
