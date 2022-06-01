package com.HotelBookingBE.model.service;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;

public interface IHotelService {
	Long save(HotelModel hotel);
	HotelModel Search(Timestamp checkinDate,Timestamp checkoutDate,Long provinceId,Long typeroomId,Long bedQuantity,int page);
	HotelModel findOnebyUserId(Long user_id);
	HotelModel findOne(Long id);
	void saveChange(HotelModel hotel);
}