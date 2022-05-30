package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
			startPage = book.getPage() - 1;
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
		bookingDao.updateValidStatus(bookingId,status,new Timestamp(System.currentTimeMillis()));
		
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
			startPage = book.getPage() - 1;
		}else
		{
			startPage = (book.getPage() - 1) * book.getMaxPageItem() ;
		}
		
		book.setResults(bookingDao.SearchByHotelId(hotel_id,status, startPage, book.getMaxPageItem()));
		book.setShortBookings(bookMap.ModeltoModelView(book.getResults()));
		return book;
	}
	@Override
	public Map<String, Object> getRevenueByMonth(Long hotel_id, int month) {
		Map<String,Object> result = new HashMap<>();
		
		// handle revenue 
		Integer totalPrice = 0;
		Integer year = (new Timestamp(System.currentTimeMillis())).getYear() + 1900;
		Integer countDay = countDay(month, year);
		List<Map<String, Object>> Days = new ArrayList<>();
		for(int i=1;i<=countDay ;i++)
		{
			Map<String,Object> day = new HashMap<>();
			String date = year + "-" + month + "-" + i;
			day.put("date", date);
			day.put("price",bookingDao.getTotalPriceByDate(hotel_id, (new Timestamp(Date.valueOf(date).getTime()))));
			Days.add(day);
		}
		
		//handle total price
		for(Map<String,Object> i : Days)
		{
			totalPrice += (int)i.get("price");
		}
		
		//handle paid/unpaid
		Integer paid = bookingDao.countMaxItemByHotel(hotel_id, 3, month);
		Integer unPaid = bookingDao.countMaxItemByHotel(hotel_id, 4, month);
		//handle tickets
		Integer tickets = bookingDao.countMaxItemByHotel(hotel_id, 0, month);
		
		result.put("Days", Days);
		result.put("totalprice", totalPrice);
		result.put("tickets", tickets);
		result.put("paid", paid);
		result.put("unpaid", unPaid);
		return result;
	}
	@Override
	public Integer countDay(int month,int year) {
		switch(month)
		{
			case 1: case 3: case 5: case 7: case 8: case 10: case 12:
				return 31;
			case 4: case 6: case 9: case 11:
				return 30;
			case 2:
				if(year%400==0 || (year % 4 == 0 && year%100 !=0))
				{
					return 29;
				}else
				{
					return 28;
				}
			default:
				return null;
		}
	}
	
	
	
	
	
}
