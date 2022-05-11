package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.HotelBookingBE.model.HotelModel;

public class HotelMapper implements IRowMapper<HotelModel> {

	@Override
	public HotelModel MappingRow(ResultSet rs) {
		HotelModel hotel = new HotelModel();
		try {
			hotel.setId(rs.getLong("id"));
			hotel.setProvince_id(rs.getLong("province_id"));
			hotel.setUser_id(rs.getLong("user_id"));
			hotel.setHotelName(rs.getString("hotel_name"));
			hotel.setHotelDescription(rs.getString("hotel_desc"));
			hotel.setHotelAddress(rs.getString("hotel_address"));
			hotel.setHotelPhone(rs.getString("hotel_phone"));
			hotel.setHotelEmail(rs.getString("hotel_email"));
			hotel.setRoomQuantity(rs.getLong("room_quantity"));
			hotel.setImage(rs.getString("image"));
			hotel.setCreatedDate(rs.getTimestamp("createddate"));
			hotel.setModifiedDate(rs.getTimestamp("modifieddate"));
			return hotel;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

}
