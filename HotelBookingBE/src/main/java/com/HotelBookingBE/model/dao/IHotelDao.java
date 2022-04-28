package com.HotelBookingBE.model.dao;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;

public interface IHotelDao extends genericDao<HotelModel>{
	void save(HotelModel hotel);
}
