package com.HotelBookingBE.model.dao.impl;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.dao.IHotelDao;

public class HotelDao extends AbstractDao<HotelModel> implements IHotelDao{

	@Override
	public void save(HotelModel hotel) {
		String sql= "insert into hotel(user_id,province_id,hotel_name,hotel_desc,hotel_address,image,createddate,hotel_email,hotel_phone) values (?,?,?,?,?,?,?,?,?)";
		insert(sql,hotel.getUser_id(),hotel.getProvince_id(),hotel.getHotelName(),
				hotel.getHotelDescription(),hotel.getHotelAddress(),hotel.getImage(),hotel.getCreatedDate(),hotel.getHotelEmail(),hotel.getHotelPhone());		
	}



}
