package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.mapper.BookingMapper;
import com.HotelBookingBE.mapper.HotelMapper;
import com.HotelBookingBE.mapper.UserMapper;
import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.ShortBookingModel;
import com.HotelBookingBE.model.dao.IBookingDao;
import com.HotelBookingBE.model.dao.IHotelDao;
import com.HotelBookingBE.model.dao.IHotelRoomDao;
import com.HotelBookingBE.model.dao.IUSerDao;
import com.HotelBookingBE.model.dao.impl.BookingDao;
import com.HotelBookingBE.model.dao.impl.HotelDao;
import com.HotelBookingBE.model.dao.impl.HotelRoomDao;
import com.HotelBookingBE.model.dao.impl.UserDao;
import com.HotelBookingBE.model.service.IBookingService;

public class BookingService implements IBookingService {

	IBookingDao bookingDao;
	IHotelDao hotelDao;
	IUSerDao userDao;
	IHotelRoomDao roomDao;
	BookingMapper bookMap;
	UserMapper userMap;
	HotelMapper hotelMap;
	public BookingService()
	{
		hotelDao = new HotelDao();
		bookingDao = new BookingDao();
		userDao = new UserDao();
		roomDao = new HotelRoomDao();
		bookMap = new BookingMapper();
		userMap = new UserMapper();
		hotelMap = new HotelMapper();
	}
	@Override
	public Long save(BookingModel book) {
		book.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		book.setDeadlineDate(new Timestamp(book.getCheckinDate().getTime()+(1000*60*60*24)));
		book.setStatus(0);
		book.setHotel_id(hotelDao.findOneByRoomId(book.getRoom_id()).getId());
		HotelRoomModel room = roomDao.findOnebyRoomId(book.getRoom_id());
		Integer countDate = ((int)(book.getCheckoutDate().getTime()-book.getCheckinDate().getTime()))
							/
							(1000*60*60*24);
		book.setTotalPrice(room.getPrice()*countDate);
		return bookingDao.save(book);
	}
	@Override
	public BookingModel SearchByUserId(Long user_id, int page) {
		Integer startPage = 0;
		BookingModel book = new BookingModel();
		book.setMaxPageItem(10);
		book.setPage(page);
		Integer maxItem = bookingDao.countMaxItemByUser(user_id);

		book.setTotalPage((int)Math.ceil((double)maxItem/(double)book.getMaxPageItem()));
		
		if(page==1)
		{
			startPage = book.getPage()-1;
		}else
		{
			startPage = (book.getPage() - 1) * book.getMaxPageItem() ;
		}
		
		book.setResults(bookingDao.SearchByUserId(user_id, startPage, book.getMaxPageItem()));
		book.setShortBookings(bookMap.ModeltoModelView(book.getResults()));
		
		for(ShortBookingModel i : book.getShortBookings())
		{
			i.setRoom(roomDao.findOnebyRoomId(i.getRoom().getId()));
			i.setHotel(hotelDao.findOne(i.getHotel().getId()));
		}
		return book;
	}
	@Override
	public void UpdateValidStatus(Long bookingId,int status) {
		bookingDao.updateValidStatus(bookingId,status);
		
	}
	@Override
	public BookingModel SearchByHotelId(Long hotel_id,int status, int page) {
		Integer startPage = 0;
		BookingModel book = new BookingModel();
		book.setMaxPageItem(10);
		book.setPage(page);
		Integer maxItem = bookingDao.countMaxItemByHotel(hotel_id,status);

		book.setTotalPage((int)Math.ceil((double)maxItem/(double)book.getMaxPageItem()));
		
		if(page==1)
		{
			startPage = book.getPage()-1;
		}else
		{
			startPage = (book.getPage() - 1) * book.getMaxPageItem() ;
		}
		
		book.setResults(bookingDao.SearchByHotelId(hotel_id,status, startPage, book.getMaxPageItem()));
		book.setShortBookings(bookMap.ModeltoModelView(book.getResults()));
		return book;
	}
	
	
	
	
	
}
