package com.HotelBookingBE.model.dao;

import com.HotelBookingBE.model.BookingModel;

public interface IBookingDao extends genericDao<BookingModel> {
	Long save(BookingModel book);
	void deleteByRoomId(Long room_id);
}
