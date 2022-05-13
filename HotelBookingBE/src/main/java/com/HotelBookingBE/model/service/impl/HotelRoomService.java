package com.HotelBookingBE.model.service.impl;

import java.sql.Timestamp;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.dao.IHotelDao;
import com.HotelBookingBE.model.dao.IHotelRoomDao;
import com.HotelBookingBE.model.dao.impl.HotelDao;
import com.HotelBookingBE.model.dao.impl.HotelRoomDao;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.IHotelService;

public class HotelRoomService implements IHotelRoomService {

	private IHotelRoomDao hotelroomDao;
	private IHotelService hotelService;
	private IHotelDao hotelDao;
	public HotelRoomService() {
		hotelroomDao = new HotelRoomDao();
		hotelService = new HotelService();
		hotelDao = new HotelDao();
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
			endPage =room.getMaxPageItem()-1;
		}else
		{
			startPage = room.getPage()*room.getMaxPageItem();
			endPage = room.getPage()*room.getMaxPageItem() + room.getMaxPageItem()-1;
		}
		
		room.setResults(hotelroomDao.Search(checkinDate, checkoutDate, HotelId, typeroomId, bedQuantity, startPage,endPage));
		
		return room;
	}
	
}
