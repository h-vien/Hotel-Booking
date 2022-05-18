package com.HotelBookingBE.model.service;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelRoomModel;

public interface IHotelRoomService {
	void save(HotelRoomModel room);
	HotelRoomModel Search(Timestamp checkinDate,Timestamp checkoutDate,Long HotelId,Long typeroomId,Long bedQuantity,int page);
	HotelRoomModel SearchAll(Long HotelId, int page);
	void Update(HotelRoomModel room);
	void Delete(Long room_id);
}
