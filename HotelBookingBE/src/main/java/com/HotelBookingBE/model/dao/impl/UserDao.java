package com.HotelBookingBE.model.dao.impl;

import java.util.ArrayList;
import java.util.List;

import com.HotelBookingBE.model.dao.IUSerDao;
import com.HotelBookingBE.mapper.UserMapper;
import com.HotelBookingBE.model.UserModel;

public class UserDao extends AbstractDao<UserModel> implements IUSerDao {

	@Override
	public List<UserModel> findAll() {
		String sql = "SELECT * FROM user";
		return query(sql,new UserMapper());
	}
	@Override
	public void save(UserModel u) {
		String sql = "INSERT INTO user(password,firstname,lastname,email,roleid,createddate) values (?,?,?,?,?,?)";
		insert(sql, u.getPassword(),u.getFirstName(),u.getLastName(),u.getEmail(),u.getRoleId(),u.getCreatedDate());
	}
	@Override
	public UserModel findOne(UserModel user) {
		String sql = "SELECT * FROM user WHERE email = ? and password = ?";
		List<UserModel> data = new ArrayList<>();
		data = query(sql,new UserMapper(), user.getEmail(),user.getPassword());
		if(data.isEmpty())
		{
			return null;
		}
		else {
			return data.get(0);
		}
		
	}
	@Override
	public void UpdateRoleId(UserModel u) {
		String sql = "UPDATE user SET roleid = ? where id = ?";
		update(sql,u.getRoleId(),u.getId());
	}
	@Override
	public UserModel updateUser(UserModel user) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public UserModel findOne(Long user_id) {
		String sql = "SELECT * FROM user WHERE id=?";
		return query(sql,new UserMapper(),user_id).get(0);
	}
	
}