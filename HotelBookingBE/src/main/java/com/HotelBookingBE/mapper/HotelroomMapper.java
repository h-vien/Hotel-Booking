package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.ShortHotelModel;
import com.HotelBookingBE.model.ShortHotelRoomModel;

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
	public List<ShortHotelRoomModel> ModeltoModelView(List<HotelRoomModel> rooms)
	{
		List<ShortHotelRoomModel> sRooms = new ArrayList<>();
		for(HotelRoomModel e : rooms)
		{
			ShortHotelRoomModel sRoom = new ShortHotelRoomModel();
			sRoom.setId(e.getId());
			sRoom.setHotel_id(e.getHotel_id());
			sRoom.setType_id(e.getType_id());
			sRoom.setRoomName(e.getRoomName());
			sRoom.setDescription(e.getDescription());
			sRoom.setPrice(e.getPrice());
			sRoom.setBed_quantity(e.getBed_quantity());
			sRoom.setImage(e.getImage());
			sRooms.add(sRoom);
		}
		return sRooms;
	}
	
}
