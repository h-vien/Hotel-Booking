package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.dao.IHotelDao;
import com.HotelBookingBE.model.dao.IHotelRoomDao;
import com.HotelBookingBE.model.dao.impl.HotelDao;
import com.HotelBookingBE.model.dao.impl.HotelRoomDao;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.IHotelService;

public class HotelRoomService implements IHotelRoomService {

	private IHotelRoomDao hotelroomDao;
	private IHotelService hotelService;
	private IHotelDao hotelDao;
	public HotelRoomService() {
		hotelroomDao = new HotelRoomDao();
		hotelService = new HotelService();
		hotelDao = new HotelDao();
	}
	@Override
	public void save(HotelRoomModel room) {
		room.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		Long id = hotelroomDao.save(room);		
		HotelModel hotel = hotelDao.findOne(room);
		hotel.setRoomQuantity(hotel.getRoomQuantity()+1);
		hotelService.saveChange(hotel);
	}
	
}
