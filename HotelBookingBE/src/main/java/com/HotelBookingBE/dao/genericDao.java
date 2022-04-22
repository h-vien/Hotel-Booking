package com.HotelBookingBE.dao;

import java.util.List;

import com.HotelBookingBE.mapper.IRowMapper;

public interface genericDao<T> {
	List<T> query(String sql, IRowMapper<T> rowMapper, Object... Parameters); 
	
}
