package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.dao.IBookingDao;
import com.HotelBookingBE.model.dao.IHotelDao;
import com.HotelBookingBE.model.dao.impl.BookingDao;
import com.HotelBookingBE.model.dao.impl.HotelDao;
import com.HotelBookingBE.model.service.IBookingService;

public class BookingService implements IBookingService {

	IBookingDao bookingDao;
	IHotelDao hotelDao;
	public BookingService()
	{
		hotelDao = new HotelDao();
		bookingDao = new BookingDao();
	}
	@Override
	public Long save(BookingModel book) {
		book.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		book.setDeadlineDate(new Timestamp(book.getCheckinDate().getTime()+(1000*60*60*24)));
		book.setHotel_id(hotelDao.findOneByRoomId(book.getRoom_id()).getId());
		return bookingDao.save(book);
	}
	
}
