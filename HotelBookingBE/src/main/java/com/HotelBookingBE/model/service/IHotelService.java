package com.HotelBookingBE.model.service;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;

public interface IHotelService {
	Long save(HotelModel hotel);
	HotelModel Search(Timestamp checkinDate,Timestamp checkoutDate,Long provinceId,Long typeroomId,Long bedQuantity,int page);

	HotelModel findOne(Long id);
	HotelModel findOne(UserModel user);
	void saveChange(HotelModel hotel);
}
