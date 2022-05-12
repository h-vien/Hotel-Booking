package com.HotelBookingBE.model.dao;

import com.HotelBookingBE.model.HotelRoomModel;

public interface IHotelRoomDao extends genericDao<HotelRoomModel> {
	void save(HotelRoomModel room);
}
