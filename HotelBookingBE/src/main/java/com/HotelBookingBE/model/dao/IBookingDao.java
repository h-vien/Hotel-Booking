package com.HotelBookingBE.model.dao;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.model.BookingModel;

public interface IBookingDao extends genericDao<BookingModel> {
	Long save(BookingModel book);
	void deleteByRoomId(Long room_id);
	Integer countMaxItemByUser(Long user_id);
	List<BookingModel> SearchByUserId(Long user_id, int startPage,int endPage);
	Integer countMaxItemByHotel(Long hotel_id,int status);
	Integer countMaxItemByHotel(Long hotel_id,int status,int month);
	List<BookingModel> SearchByHotelId(Long hotel_id,int status, int startPage,int endPage);
	void updateOutOfDateStatus(Timestamp currentTime);
	void updateValidStatus(Long bookingId,int status,Timestamp modifiedDate);
	Integer getTotalPriceByDate(Long hotel_id,Timestamp date);
	
}
