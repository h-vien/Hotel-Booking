package com.HotelBookingBE.model.dao.impl;

import java.util.List;

import com.HotelBookingBE.mapper.ProvinceMapper;
import com.HotelBookingBE.model.ProvinceModel;
import com.HotelBookingBE.model.dao.IProvinceDao;

public class ProvinceDao extends AbstractDao<ProvinceModel> implements IProvinceDao {

	@Override
	public List<ProvinceModel> findAll() {
		String sql = "select * from province";
		return query(sql,new ProvinceMapper());
	}

}
