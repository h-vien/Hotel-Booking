package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.dao.IBookingDao;
import com.HotelBookingBE.model.dao.IHotelDao;
import com.HotelBookingBE.model.dao.IHotelRoomDao;
import com.HotelBookingBE.model.dao.impl.BookingDao;
import com.HotelBookingBE.model.dao.impl.HotelDao;
import com.HotelBookingBE.model.dao.impl.HotelRoomDao;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.IHotelService;

public class HotelRoomService implements IHotelRoomService {

	private IHotelRoomDao hotelroomDao;
	private IHotelService hotelService;
	private IHotelDao hotelDao;
	private IBookingDao bookingDao;
	public HotelRoomService() {
		hotelroomDao = new HotelRoomDao();
		hotelService = new HotelService();
		hotelDao = new HotelDao();
		bookingDao = new BookingDao();
	}
	@Override
	public void save(HotelRoomModel room) {
		room.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		Long id = hotelroomDao.save(room);		
		HotelModel hotel = hotelDao.findOne(room);
		hotel.setRoomQuantity(hotel.getRoomQuantity()+1);
		hotelService.saveChange(hotel);
	}
	@Override
	public HotelRoomModel Search(Timestamp checkinDate, Timestamp checkoutDate, Long HotelId, Long typeroomId,
			Long bedQuantity, int page) {
		Integer startPage = 0;
		Integer endPage = 0;
		HotelRoomModel room = new HotelRoomModel();
		room.setMaxPageItem(10);
		room.setPage(page);
		Integer maxItem = hotelroomDao.countMaxItem(checkinDate, checkoutDate, HotelId, typeroomId, bedQuantity);

		room.setTotalPage((int)Math.ceil((double)maxItem/(double)room.getMaxPageItem()));
		
		if(page==1)
		{
			startPage = room.getPage()-1;
			endPage = room.getMaxPageItem();
		}else
		{
			startPage = (room.getPage() - 1) * room.getMaxPageItem() ;
			endPage = room.getMaxPageItem();
		}
		
		room.setResults(hotelroomDao.Search(checkinDate, checkoutDate, HotelId, typeroomId, bedQuantity, startPage,endPage));
		
		return room;
	}
	@Override
	public HotelRoomModel SearchAll(Long HotelId, int page) {
		Integer startPage = 0;
		Integer endPage = 0;
		HotelRoomModel room = new HotelRoomModel();
		room.setMaxPageItem(10);
		room.setPage(page);
		Integer maxItem = hotelroomDao.countMaxAll( HotelId);
		room.setTotalPage((int)Math.ceil((double)maxItem/(double)room.getMaxPageItem()));
	
		if(page==1)
		{
			startPage = room.getPage()-1;
			endPage = room.getMaxPageItem();
		}else
		{
			startPage = (room.getPage() - 1) * room.getMaxPageItem() ;
			endPage = room.getMaxPageItem();
		}
		
		room.setResults(hotelroomDao.SearchAll( HotelId, startPage,endPage));
		return room;		
	}
	@Override
	public void Update(HotelRoomModel room) {
		room.setModifiedDate(new Timestamp(System.currentTimeMillis()));
		hotelroomDao.UpdateRoom(room);
	}
	@Override
	public void Delete(Long room_id) {
		bookingDao.deleteByRoomId(room_id);
		hotelroomDao.DeleteRoom(room_id);	
	}
	
	
	

	
}
