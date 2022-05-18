package com.HotelBookingBE.model.dao.impl;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.mapper.HotelroomMapper;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.dao.IHotelRoomDao;

public class HotelRoomDao extends AbstractDao<HotelRoomModel> implements IHotelRoomDao {

	@Override
	public Long save(HotelRoomModel room) {
		String sql = "insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image,createddate) values (?,?,?,?,?,?,?,?)";
		return insert(sql,room.getHotel_id(),room.getType_id(),room.getRoomName(),room.getBed_quantity(),room.getPrice(),
				room.getDescription(),room.getImage(),room.getCreatedDate());
	}

	@Override
	public List<HotelRoomModel> Search(Timestamp checkinDate, Timestamp checkoutDate, Long hotelId, Long typeroomId,
			Long bedQuantity, Integer startPage, Integer endPage) {
		String sql = "select distinct hotelroom.*" + 
				" from hotel " + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" inner join booking on hotel.id = booking.hotel_id" + 
				" where hotelroom.type_id = ?" + 
				" and hotelroom.bed_quantity = ?" + 
				" and hotel.id = ?" +
				" and ((booking.checkin_date > ? and booking.checkin_date > ?) or (booking.checkout_date < ? and booking.checkout_date <  ?))" +
		        " limit ?, ?";
		return query(sql,new HotelroomMapper(),typeroomId,bedQuantity,hotelId,checkinDate,checkoutDate,checkinDate,checkoutDate,startPage,endPage);
	}

	@Override
	public Integer countMaxItem(Timestamp checkinDate, Timestamp checkoutDate, Long hotelId, Long typeroomId,
			Long bedQuantity) {
		String sql = "select count(distinct hotelroom.id)" + 
				" from hotel " + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" inner join booking on hotel.id = booking.hotel_id" + 
				" where hotelroom.type_id = ?" + 
				" and hotelroom.bed_quantity = ?" + 
				" and hotel.id = ?" +
				" and ((booking.checkin_date > ? and booking.checkin_date > ?) or (booking.checkout_date < ? and booking.checkout_date <  ?))";
		return count(sql,typeroomId,bedQuantity,hotelId,checkinDate,checkoutDate,checkinDate,checkoutDate);
	}

	@Override
	public List<HotelRoomModel> SearchAll(Long hotelId, Integer startPage, Integer endPage) {
		String sql = "select distinct hotelroom.*" + 
				" from hotel " + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" where hotel.id= ?" + 
		        " limit ?, ?";
		return query(sql,new HotelroomMapper(),hotelId,startPage,endPage);
	}

	@Override
	public Integer countMaxAll(Long hotelId) {
		String sql = "select count(distinct hotelroom.id)" + 
				" from hotel " + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" and hotel.id = ?" ;
				
		return count(sql,hotelId);
	}

	@Override
	public void UpdateRoom(HotelRoomModel room) {
		String sql = "update hotelroom set hotel_id = ?, type_id = ?, name = ? , bed_quantity = ? , price = ?" +
					", description = ?, image = ? , modifieddate = ? where id = ?";
		update(sql, room.getHotel_id(),room.getType_id(),room.getRoomName(),room.getBed_quantity(),room.getPrice(),
				room.getDescription(),room.getImage(),room.getModifiedDate(),room.getId());
	}

	@Override
	public void DeleteRoom(Long room_id) {
		String sql = "delete from hotelroom where id = ?";
		update(sql, room_id);
	}

	
	
	
	
	
	
}
