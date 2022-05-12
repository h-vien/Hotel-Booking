package com.HotelBookingBE.model.service;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;

public interface IHotelRoomService {
	void save(HotelRoomModel room, HotelModel hotel);
}
