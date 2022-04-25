package com.HotelBookingBE.model;

import java.sql.Timestamp;

public class BookingModel extends AbstractModel{
	private Long room_id;
	private Long user_id;
	private Long hotel_id;
	private Timestamp checkinDate;
	private Timestamp checkoutDate;
	private Timestamp deadlineDate;
	public Long getRoom_id() {
		return room_id;
	}
	public void setRoom_id(Long room_id) {
		this.room_id = room_id;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public Long getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(Long hotel_id) {
		this.hotel_id = hotel_id;
	}
	public Timestamp getCheckinDate() {
		return checkinDate;
	}
	public void setCheckinDate(Timestamp checkinDate) {
		this.checkinDate = checkinDate;
	}
	public Timestamp getCheckoutDate() {
		return checkoutDate;
	}
	public void setCheckoutDate(Timestamp checkoutDate) {
		this.checkoutDate = checkoutDate;
	}
	public Timestamp getDeadlineDate() {
		return deadlineDate;
	}
	public void setDeadlineDate(Timestamp deadlineDate) {
		this.deadlineDate = deadlineDate;
	}
	
}
