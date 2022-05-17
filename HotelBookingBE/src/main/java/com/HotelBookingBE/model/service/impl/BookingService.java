package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.dao.IBookingDao;
import com.HotelBookingBE.model.dao.impl.BookingDao;
import com.HotelBookingBE.model.service.IBookingService;

public class BookingService implements IBookingService {

	IBookingDao bookingDao;
	public BookingService()
	{
		bookingDao = new BookingDao();
	}
	@Override
	public Long save(BookingModel book) {
		book.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		book.setDeadlineDate(new Timestamp(book.getCheckinDate().getTime()+(1000*60*60*24)));
		return bookingDao.save(book);
	}
	
}
