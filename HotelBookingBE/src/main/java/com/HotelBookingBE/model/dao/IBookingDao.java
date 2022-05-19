package com.HotelBookingBE.model.dao;

import java.util.List;

import com.HotelBookingBE.model.BookingModel;

public interface IBookingDao extends genericDao<BookingModel> {
	Long save(BookingModel book);
	void deleteByRoomId(Long room_id);
	Integer countMaxItem(Long user_id);
	List<BookingModel> SearchByUserId(Long user_id, int startPage,int endPage);
}
