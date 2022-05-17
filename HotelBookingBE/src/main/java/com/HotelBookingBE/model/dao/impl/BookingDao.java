package com.HotelBookingBE.model.dao.impl;

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

	
	
}
