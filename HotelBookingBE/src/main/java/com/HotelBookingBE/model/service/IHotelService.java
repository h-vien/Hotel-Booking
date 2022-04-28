package com.HotelBookingBE.model.service;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;

public interface IHotelService {
	void save(HotelModel hotel,UserModel user);
}
