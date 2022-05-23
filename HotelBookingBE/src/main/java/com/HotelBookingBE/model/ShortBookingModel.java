package com.HotelBookingBE.model;

import java.sql.Timestamp;

public class ShortBookingModel {
	private Long id;
	private HotelRoomModel room = new HotelRoomModel();
	private Long user_id;
	private HotelModel hotel = new HotelModel();
	private String fullName;
	private String phonenumber;
	private String cccd;
	private String email;
	private Integer status;
	private Timestamp birthday;
	private Timestamp checkinDate;
	private Timestamp checkoutDate;
	private Timestamp deadlineDate;
	private Timestamp createdDate;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	public Timestamp getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}
	public HotelRoomModel getRoom() {
		return room;
	}
	public void setRoom(HotelRoomModel room) {
		this.room = room;
	}
	public HotelModel getHotel() {
		return hotel;
	}
	public void setHotel(HotelModel hotel) {
		this.hotel = hotel;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	
	
}
