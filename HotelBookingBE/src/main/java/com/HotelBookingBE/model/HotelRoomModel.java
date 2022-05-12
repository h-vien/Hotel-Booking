package com.HotelBookingBE.model;

public class HotelRoomModel extends AbstractModel<HotelRoomModel>{
	private Long hotel_id;
	private Long type_id;
	private String roomName;
	private String description;
	private Long price;
	private Long bed_quantity;
	private String image;
	
	
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public Long getBed_quantity() {
		return bed_quantity;
	}
	public void setBed_quantity(Long bed_quantity) {
		this.bed_quantity = bed_quantity;
	}
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
}
