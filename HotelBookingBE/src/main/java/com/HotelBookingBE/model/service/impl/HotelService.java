package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.dao.IHotelDao;
import com.HotelBookingBE.model.dao.IUSerDao;
import com.HotelBookingBE.model.dao.impl.HotelDao;
import com.HotelBookingBE.model.dao.impl.UserDao;
import com.HotelBookingBE.model.service.IHotelService;


public class HotelService implements IHotelService {
	private IHotelDao hotelDao;
	private IUSerDao userDao;
	public HotelService()
	{
		hotelDao = new HotelDao();
		userDao = new UserDao();
	}
	@Override
	public void save(HotelModel hotel, UserModel user) {
		hotel.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		hotel.setUser_id(user.getId());
		user.setRoleId(2L);
		hotelDao.save(hotel);
		userDao.UpdateRoleId(user);
		
	}
	
}
