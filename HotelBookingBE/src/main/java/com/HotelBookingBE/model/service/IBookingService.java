package com.HotelBookingBE.model.service;

import java.util.Map;

import com.HotelBookingBE.model.BookingModel;

public interface IBookingService {
	Long save(BookingModel book);
	BookingModel SearchByUserId(Long user_id, int page);
	BookingModel SearchByHotelId(Long hotel_id,int status,int page,String sort,String direction);
	void UpdateValidStatus(Long bookingId,int status);
	Map<String,Object> getRevenueByMonth(Long hotel_id,int month);
	Integer countDay(int month,int year);
}
