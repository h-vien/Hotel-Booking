package com.HotelBookingBE.model;

public class HotelRoomModel extends AbstractModel{
	private Long hotel_id;
	private Long type_id;
	private String description;
	private int status;
	private String image;
	public Long getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(Long hotel_id) {
		this.hotel_id = hotel_id;
	}
	public Long getType_id() {
		return type_id;
	}
	public void setType_id(Long type_id) {
		this.type_id = type_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
}
