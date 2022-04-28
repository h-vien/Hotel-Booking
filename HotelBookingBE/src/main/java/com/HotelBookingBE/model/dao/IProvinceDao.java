package com.HotelBookingBE.model.dao;

import java.util.List;

import com.HotelBookingBE.model.ProvinceModel;

public interface IProvinceDao extends genericDao<ProvinceModel> {
	List<ProvinceModel> findAll();
}
