package com.HotelBookingBE.model.dao;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;

public interface IHotelDao extends genericDao<HotelModel>{
	Long save(HotelModel hotel);
	HotelModel findOne(Long id);
	HotelModel findOne(HotelRoomModel hotelroom);
	List<HotelModel> Search(Timestamp checkinDate,Timestamp checkoutDate,Long provinceId,Long typeroomId,
			Long bedQuantity,Integer startPage,Integer endPage);
	Integer countMaxItem(Timestamp checkinDate,Timestamp checkoutDate,Long provinceId,Long typeroomId,Long bedQuantity);
	void updateHotel(HotelModel hotel);
}
