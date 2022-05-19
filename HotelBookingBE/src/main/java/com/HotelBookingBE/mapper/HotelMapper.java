package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.ShortHotelModel;

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
			e.printStackTrace();
			return null;
		}
	}

	public List<ShortHotelModel> ModeltoModelView(List<HotelModel> hotel) {
		List<ShortHotelModel> sHotels = new ArrayList<>();
		for(HotelModel e : hotel)
		{
			ShortHotelModel sHotel = new ShortHotelModel();
			sHotel.setId(e.getId());
			sHotel.setUser_id(e.getUser_id());
			sHotel.setProvince_id(e.getProvince_id());
			sHotel.setHotelName(e.getHotelName());
			sHotel.setHotelDescription(e.getHotelDescription());
			sHotel.setHotelAddress(e.getHotelAddress());
			sHotel.setRoomQuantity(e.getRoomQuantity());
			sHotel.setImage(e.getImage());
			sHotel.setHotelEmail(e.getHotelEmail());
			sHotel.setHotelPhone(e.getHotelPhone());
			sHotels.add(sHotel);
		}
		return sHotels;
	}

}
