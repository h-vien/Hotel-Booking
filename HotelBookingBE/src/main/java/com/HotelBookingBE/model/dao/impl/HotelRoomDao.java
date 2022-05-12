package com.HotelBookingBE.model.dao.impl;

import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.dao.IHotelRoomDao;

public class HotelRoomDao extends AbstractDao<HotelRoomModel> implements IHotelRoomDao {

	@Override
	public void save(HotelRoomModel room) {
		String sql = "insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image,createddate) values (?,?,?,?,?,?,?,?)";
		insert(sql,room.getHotel_id(),room.getType_id(),room.getRoomName(),room.getBed_quantity(),room.getPrice(),
				room.getDescription(),room.getImage(),room.getCreatedDate());
		
	}
	
}
