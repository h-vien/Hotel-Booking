package com.HotelBookingBE.model;

public class HotelManagerModel extends UserModel {
	private String hotelName;
	private String hotelDescription;
	private String hotelAddress;
	private String image;
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
	
	
}
