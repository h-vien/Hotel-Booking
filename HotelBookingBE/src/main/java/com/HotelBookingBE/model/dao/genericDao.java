package com.HotelBookingBE.model.dao;

import java.util.List;

import com.HotelBookingBE.mapper.IRowMapper;

public interface genericDao<T> {
	List<T> query(String sql, IRowMapper<T> rowMapper, Object... Parameters); 
	void insert(String sql,Object... Parameters);
}
