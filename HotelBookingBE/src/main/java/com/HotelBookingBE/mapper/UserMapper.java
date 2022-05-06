package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.HotelBookingBE.model.UserModel;

public class UserMapper implements IRowMapper<UserModel>{

	@Override
	public UserModel MappingRow(ResultSet rs) {
		UserModel user = new UserModel();
		try {
			user.setId(rs.getLong("id"));
			user.setUsername(rs.getString("username"));
			user.setPassword(rs.getString("password"));
			user.setFirstName(rs.getString("firstname"));
			user.setLastName(rs.getString("lastname"));
			user.setGender(rs.getBoolean("gender"));
			user.setPhoneNumber(rs.getString("phonenumber"));
			user.setEmail(rs.getString("email"));
			user.setRoleId(rs.getLong("roleid"));
			user.setCreatedDate(rs.getTimestamp("createddate"));
			return user;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return null;
		}
		
		
	}

}
