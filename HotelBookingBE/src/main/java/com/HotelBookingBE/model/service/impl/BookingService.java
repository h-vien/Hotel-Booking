package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.mapper.BookingMapper;
import com.HotelBookingBE.mapper.HotelroomMapper;
import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.HotelRoomModel;
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
	@Override
	public BookingModel SearchByUserId(Long user_id, int page) {
		Integer startPage = 0;
		BookingModel book = new BookingModel();
		book.setMaxPageItem(10);
		book.setPage(page);
		Integer maxItem = bookingDao.countMaxItem(user_id);

		book.setTotalPage((int)Math.ceil((double)maxItem/(double)book.getMaxPageItem()));
		
		if(page==1)
		{
			startPage = book.getPage()-1;
		}else
		{
			startPage = (book.getPage() - 1) * book.getMaxPageItem() ;
		}
		
		book.setResults(bookingDao.SearchByUserId(user_id, startPage, book.getMaxPageItem()));
		BookingMapper map = new BookingMapper();
		book.setShortBookings(map.ModeltoModelView(book.getResults()));
		return book;
	}
	
}
