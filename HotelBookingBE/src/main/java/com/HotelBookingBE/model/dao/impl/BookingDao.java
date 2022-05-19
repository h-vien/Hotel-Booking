package com.HotelBookingBE.model.dao.impl;

import java.util.List;

import com.HotelBookingBE.mapper.BookingMapper;
import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.dao.IBookingDao;

public class BookingDao extends AbstractDao<BookingModel> implements IBookingDao {

	@Override
	public Long save(BookingModel book) {
		String sql = "insert into booking(room_id,user_id,hotel_id,fullName,phonenumber,cccd,email,birthday,checkin_date,checkout_date,deadline_date"
				+ ", createddate) values(?,?,?,?,?,?,?,?,?,?,?,?)";
		return insert(sql,book.getRoom_id(),book.getUser_id(),book.getHotel_id(),book.getFullName(),book.getPhonenumber(),book.getCccd(),
				book.getEmail(),book.getBirthday(),book.getCheckinDate(),book.getCheckoutDate(),book.getDeadlineDate(),book.getCreatedDate());
	}

	@Override
	public void deleteByRoomId(Long room_id) {
		String sql = "delete from booking where room_id = ?";
		update(sql,room_id);
		
	}

	@Override
	public Integer countMaxItem(Long user_id) {
		String sql = "select count(distinct booking.id) from booking where user_id = ? ";
		return count(sql,user_id);
	}

	@Override
	public List<BookingModel> SearchByUserId(Long user_id, int startPage,int endPage) {
		String sql = "select * from booking where user_id = ? limit ?,? ";
		return query(sql,new BookingMapper(),user_id,startPage,endPage);
	}

	
	
}
