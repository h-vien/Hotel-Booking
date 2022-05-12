package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.dao.IHotelRoomDao;
import com.HotelBookingBE.model.dao.impl.HotelRoomDao;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.IHotelService;

public class HotelRoomService implements IHotelRoomService {

	private IHotelRoomDao hotelroomDao;
	private IHotelService hotelService;
	public HotelRoomService() {
		hotelroomDao = new HotelRoomDao();
		hotelService = new HotelService();
	}
	@Override
	public void save(HotelRoomModel room, HotelModel hotel) {
		room.setHotel_id(hotel.getId());
		room.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		hotel.setRoomQuantity(hotel.getRoomQuantity()+1);
		hotelroomDao.save(room);
		hotelService.saveChange(hotel);
	}
	
}
