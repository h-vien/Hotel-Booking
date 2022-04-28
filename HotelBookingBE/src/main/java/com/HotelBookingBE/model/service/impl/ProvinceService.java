package com.HotelBookingBE.model.service.impl;

import java.util.List;

import com.HotelBookingBE.model.ProvinceModel;
import com.HotelBookingBE.model.dao.IProvinceDao;
import com.HotelBookingBE.model.dao.impl.ProvinceDao;
import com.HotelBookingBE.model.service.IProvinceService;

public class ProvinceService implements IProvinceService{
	
	private IProvinceDao provinceDao;
	public ProvinceService()
	{
		provinceDao = new ProvinceDao();
	}
	@Override
	public List<ProvinceModel> findAll() {
		// TODO Auto-generated method stub
		return provinceDao.findAll();
	}
	
}
