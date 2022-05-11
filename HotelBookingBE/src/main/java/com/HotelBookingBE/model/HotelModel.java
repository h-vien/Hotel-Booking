	package com.HotelBookingBE.model;

public class HotelModel extends AbstractModel<HotelModel> {
	private long user_id;
	private long province_id;
	private String hotelName;
	private String hotelDescription;
	private String hotelAddress;
	private String image;	
	private Long roomQuantity;
	private String hotelEmail;
	private String hotelPhone;
	
	
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public String getHotelDescription() {
		return hotelDescription;
	}
	public void setHotelDescription(String hotelDescription) {
		this.hotelDescription = hotelDescription;
	}
	public String getHotelAddress() {
		return hotelAddress;
	}
	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public long getProvince_id() {
		return province_id;
	}
	public void setProvince_id(long province_id) {
		this.province_id = province_id;
	}
	public String getHotelPhone() {
		return hotelPhone;
	}
	public void setHotelPhone(String hotelPhone) {
		this.hotelPhone = hotelPhone;
	}
	public String getHotelEmail() {
		return hotelEmail;
	}
	public void setHotelEmail(String hotelEmail) {
		this.hotelEmail = hotelEmail;
	}
	public Long getRoomQuantity() {
		return roomQuantity;
	}
	public void setRoomQuantity(Long roomQuantity) {
		this.roomQuantity = roomQuantity;
	}
}
