package com.HotelBookingBE.model.dao;

import java.util.List;

import com.HotelBookingBE.model.UserModel;

public interface IUSerDao extends genericDao<UserModel>  {
	List<UserModel> findAll();
	Long save(UserModel u);
	UserModel findOne(UserModel user);
	UserModel findOne(Long user_id);
	void UpdateRoleId(UserModel u);
	void updateUser(UserModel user);
}
