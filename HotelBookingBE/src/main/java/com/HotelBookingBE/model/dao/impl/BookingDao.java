package com.HotelBookingBE.model.dao.impl;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.mapper.BookingMapper;
import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.dao.IBookingDao;

public class BookingDao extends AbstractDao<BookingModel> implements IBookingDao {

	@Override
	public Long save(BookingModel book) {
		String sql = "insert into booking(room_id,user_id,hotel_id,fullName,phonenumber,cccd,email,birthday,checkin_date,checkout_date,deadline_date"
				+ ", createddate,status,totalprice) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		return insert(sql,book.getRoom_id(),book.getUser_id(),book.getHotel_id(),book.getFullName(),book.getPhonenumber(),book.getCccd(),
				book.getEmail(),book.getBirthday(),book.getCheckinDate(),book.getCheckoutDate(),book.getDeadlineDate(),book.getCreatedDate(),book.getStatus(),
				book.getTotalPrice());
	}

	@Override
	public void deleteByRoomId(Long room_id) {
		String sql = "delete from booking where room_id = ?";
		update(sql,room_id);
		
	}

	@Override
	public Integer countMaxItemByUser(Long user_id) {
		String sql = "select count(distinct booking.id) from booking where user_id = ? ";
		return count(sql,user_id);
	}

	@Override
	public List<BookingModel> SearchByUserId(Long user_id, int startPage,int endPage) {
		String sql = "select * from booking where user_id = ? limit ?,? ";
		return query(sql,new BookingMapper(),user_id,startPage,endPage);
	}

	@Override
	public void updateOutOfDateStatus(Timestamp currentTime) {
		String sql = "update booking set status = 2 where deadline_date < ?";
		update(sql,currentTime);
		
	}

	@Override
	public void updateValidStatus(Long bookingId,int status) {
		String sql = "update booking set status = ? where id=?";
		update(sql,status,bookingId);
		
	}

	@Override
	public Integer countMaxItemByHotel(Long hotel_id,int status) {
		String sql = "select count(distinct booking.id) from booking where hotel_id = ? and status = ? ";
		return count(sql,hotel_id,status);
	}

	@Override
	public List<BookingModel> SearchByHotelId(Long hotel_id,int status, int startPage, int endPage) {
		String sql = "select * from booking where hotel_id = ? and status = ? limit ?,? ";
		return query(sql,new BookingMapper(),hotel_id,status,startPage,endPage);
	}

	
	
}
