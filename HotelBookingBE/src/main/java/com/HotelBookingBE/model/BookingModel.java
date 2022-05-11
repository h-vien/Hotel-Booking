package com.HotelBookingBE.model;

import java.sql.Timestamp;

public class BookingModel extends AbstractModel<BookingModel>{
	private Long room_id;
	private Long user_id;
	private Long hotel_id;
	private String fullName;
	private String phonenumber;
	private String cccd;
	private String email;
	private Timestamp birthday;
	private Timestamp checkinDate;
	private Timestamp checkoutDate;
	private Timestamp deadlineDate;
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getCccd() {
		return cccd;
	}
	public void setCccd(String cccd) {
		this.cccd = cccd;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Timestamp getBirthday() {
		return birthday;
	}
	public void setBirthday(Timestamp birthday) {
		this.birthday = birthday;
	}
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
