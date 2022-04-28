package com.HotelBookingBE.model.dao;

import java.util.List;

import com.HotelBookingBE.model.UserModel;

public interface IUSerDao extends genericDao<UserModel>  {
	List<UserModel> findAll();
	void save(UserModel u);
	UserModel findOne(UserModel user);
	void UpdateRoleId(UserModel u);
}
