package com.HotelBookingBE.model.dao;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.model.HotelModel;

public interface IHotelDao extends genericDao<HotelModel>{
	void save(HotelModel hotel);
	HotelModel findOne(Long id);
	List<HotelModel> Search(Timestamp checkinDate,Timestamp checkoutDate,Long provinceId,Long typeroomId,
			Long bedQuantity,Integer startPage,Integer endPage);
	Integer countMaxItem(Timestamp checkinDate,Timestamp checkoutDate,Long provinceId,Long typeroomId,Long bedQuantity);
	void updateHotel(HotelModel hotel);
}
