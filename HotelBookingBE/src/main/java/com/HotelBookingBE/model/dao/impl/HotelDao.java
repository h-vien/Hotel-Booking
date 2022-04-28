package com.HotelBookingBE.model.dao.impl;

import java.util.List;

import com.HotelBookingBE.mapper.IRowMapper;
import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.dao.IHotelDao;

public class HotelDao extends AbstractDao<HotelModel> implements IHotelDao{

	@Override
	public void save(HotelModel hotel) {
		String sql= "insert into hotel(user_id,province_id,hotel_name,hotel_desc,hotel_address,image,createddate) values (?,?,?,?,?,?,?)";
		insert(sql,hotel.getUser_id(),hotel.getProvince_id(),hotel.getHotelName(),
				hotel.getHotelDescription(),hotel.getHotelAddress(),hotel.getImage(),hotel.getCreatedDate());		
	}



}
