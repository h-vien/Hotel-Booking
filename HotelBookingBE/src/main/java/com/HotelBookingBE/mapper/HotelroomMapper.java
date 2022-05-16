package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.HotelBookingBE.model.HotelRoomModel;

public class HotelroomMapper implements IRowMapper<HotelRoomModel> {

	@Override
	public HotelRoomModel MappingRow(ResultSet rs) {
		HotelRoomModel room = new HotelRoomModel();
		try {
			room.setId(rs.getLong("id"));
			room.setHotel_id(rs.getLong("hotel_id"));
			room.setType_id(rs.getLong("type_id"));
			room.setRoomName(rs.getString("name"));
			room.setBed_quantity(rs.getLong("bed_quantity"));
			room.setPrice(rs.getLong("price"));
			room.setDescription(rs.getString("description"));
			room.setImage(rs.getString("image"));
			room.setCreatedDate(rs.getTimestamp("createddate"));
			room.setModifiedDate(rs.getTimestamp("modifieddate"));
			return room;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();		
			return null;
		}
		

	}
	
}
