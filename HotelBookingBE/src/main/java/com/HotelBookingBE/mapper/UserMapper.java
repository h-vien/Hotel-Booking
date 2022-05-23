package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.HotelBookingBE.model.ShortUserModel;
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
			user.setBirthday(rs.getTimestamp("birthday"));
			user.setEmail(rs.getString("email"));
			user.setRoleId(rs.getLong("roleid"));
			user.setImage(rs.getString("image"));
			user.setCreatedDate(rs.getTimestamp("createddate"));
			return user;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
	
	public ShortUserModel ModeltoModelView(UserModel user)
	{
		ShortUserModel sUser = new ShortUserModel();
		sUser.setId(user.getId());
		sUser.setRoleId(user.getRoleId());
		sUser.setUsername(user.getUsername());
		sUser.setFirstName(user.getFirstName());
		sUser.setLastName(user.getLastName());
		sUser.setGender(user.isGender());
		sUser.setPhoneNumber(user.getPhoneNumber());
		sUser.setEmail(user.getEmail());
		sUser.setBirthday(user.getBirthday());
		sUser.setImage(user.getImage());
		return sUser;
	}

}
