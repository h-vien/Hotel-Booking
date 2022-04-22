package com.HotelBookingBE.model;

public class ReceiptModel extends AbstractModel {
	private Long booking_id;
	private Long user_id;
	private Long sumprice;
	public Long getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public Long getSumprice() {
		return sumprice;
	}
	public void setSumprice(Long sumprice) {
		this.sumprice = sumprice;
	}
	
}
