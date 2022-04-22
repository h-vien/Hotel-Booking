package com.HotelBookingBE.dao;

import java.util.List;

import com.HotelBookingBE.model.UserModel;

public interface IUSerDao extends genericDao<UserModel>  {
	List<UserModel> findAll();
}
