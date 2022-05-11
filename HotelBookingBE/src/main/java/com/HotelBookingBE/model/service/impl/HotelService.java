package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;
import java.util.List;

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
	@Override
	public HotelModel Search(Timestamp checkinDate, Timestamp checkoutDate, Long provinceId, Long typeroomId,
			Long bedQuantity, int page) {
		Integer startPage = 0;
		Integer endPage = 0;
		HotelModel hotel = new HotelModel();
		hotel.setMaxPageItem(10);
		hotel.setPage(page);
		Integer maxItem = hotelDao.countMaxItem(checkinDate, checkoutDate, provinceId, typeroomId, bedQuantity);

		hotel.setTotalPage((int)Math.ceil((double)maxItem/(double)hotel.getMaxPageItem()));
		
		if(page==1)
		{
			startPage = hotel.getPage()-1;
			endPage =hotel.getMaxPageItem()-1;
		}else
		{
			startPage = hotel.getPage()*hotel.getMaxPageItem();
			endPage = hotel.getPage()*hotel.getMaxPageItem() + hotel.getMaxPageItem()-1;
		}
		
		hotel.setResults(hotelDao.Search(checkinDate, checkoutDate, provinceId, typeroomId, bedQuantity, startPage,endPage));
		
		return hotel;
	}
	
}
