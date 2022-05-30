package com.HotelBookingBE.model.dao;

import java.util.List;

import com.HotelBookingBE.mapper.IRowMapper;

public interface genericDao<T> {
	List<T> query(String sql, IRowMapper<T> rowMapper, Object... Parameters); 
	Long insert(String sql,Object... Parameters);
	void update(String sql,Object... Parameters);
	Integer count(String sql,Object... Parameters);
	
}
