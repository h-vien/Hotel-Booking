package com.HotelBookingBE.model.dao;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.model.HotelRoomModel;

public interface IHotelRoomDao extends genericDao<HotelRoomModel> {
	Long save(HotelRoomModel room);
	List<HotelRoomModel> Search(Timestamp checkinDate,Timestamp checkoutDate,Long hotelId,Long typeroomId,
			Long bedQuantity,Integer startPage,Integer endPage);
	List<HotelRoomModel> SearchAll(Long hotelId,Integer startPage, Integer endPage);
	Integer countMaxItem(Timestamp checkinDate,Timestamp checkoutDate,Long hotelId,Long typeroomId,Long bedQuantity);
	Integer countMaxAll(Long hotelId);
	void UpdateRoom(HotelRoomModel room);
	void DeleteRoom(Long room_id);
	}
