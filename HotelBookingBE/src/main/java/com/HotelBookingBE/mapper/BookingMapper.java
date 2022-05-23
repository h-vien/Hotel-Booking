package com.HotelBookingBE.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.ShortBookingModel;
import com.HotelBookingBE.model.ShortHotelModel;

public class BookingMapper implements IRowMapper<BookingModel> {

	@Override
	public BookingModel MappingRow(ResultSet rs) {
		BookingModel book = new BookingModel();
		try {
			book.setId(rs.getLong("id"));
			book.setRoom_id(rs.getLong("room_id"));
			book.setUser_id(rs.getLong("user_id"));
			book.setHotel_id(rs.getLong("hotel_id"));
			book.setFullName(rs.getString("fullName"));
			book.setPhonenumber(rs.getString("phonenumber"));
			book.setCccd(rs.getString("cccd"));
			book.setEmail(rs.getString("email"));
			book.setBirthday(rs.getTimestamp("birthday"));
			book.setStatus(rs.getInt("status"));
			book.setCheckinDate(rs.getTimestamp("checkin_date"));
			book.setCheckoutDate(rs.getTimestamp("checkout_date"));
			book.setDeadlineDate(rs.getTimestamp("deadline_date"));
			book.setCreatedDate(rs.getTimestamp("createddate"));
			book.setModifiedDate(rs.getTimestamp("modifieddate"));
			return book;
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}
	public List<ShortBookingModel> ModeltoModelView(List<BookingModel> bookings) {
		List<ShortBookingModel> sBookings = new ArrayList<>();
		for(BookingModel e : bookings)
		{
			ShortBookingModel sBooking = new ShortBookingModel();
			sBooking.setId(e.getId());
			sBooking.getRoom().setId(e.getRoom_id());
			sBooking.setUser_id(e.getUser_id());
			sBooking.getHotel().setId(e.getHotel_id());
			sBooking.setFullName(e.getFullName());
			sBooking.setPhonenumber(e.getPhonenumber());
			sBooking.setCccd(e.getCccd());
			sBooking.setEmail(e.getEmail());
			sBooking.setBirthday(e.getBirthday());
			sBooking.setStatus(e.getStatus());
			sBooking.setCheckinDate(e.getCheckinDate());
			sBooking.setCheckoutDate(e.getCheckoutDate());
			sBooking.setDeadlineDate(e.getDeadlineDate());
			sBooking.setCreatedDate(e.getCreatedDate());
			sBookings.add(sBooking);
		}
		return sBookings;
	}

}
