package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.HotelBookingBE.model.ProvinceModel;

public class ProvinceMapper implements IRowMapper {

	@Override
	public ProvinceModel MappingRow(ResultSet rs) {
		ProvinceModel data = new ProvinceModel();
		try {
			data.setId(rs.getLong("id"));
			data.setName(rs.getString("name"));
			return data;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
