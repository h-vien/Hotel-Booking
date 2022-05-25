package com.HotelBookingBE.model.dao.impl;

import java.sql.Timestamp;
import java.util.List;

import com.HotelBookingBE.mapper.HotelMapper;
import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.dao.IHotelDao;

public class HotelDao extends AbstractDao<HotelModel> implements IHotelDao{

	@Override
	public Long save(HotelModel hotel) {
		String sql= "insert into hotel(user_id,province_id,hotel_name,hotel_desc,hotel_address,image,createddate,hotel_email,hotel_phone,room_quantity) values (?,?,?,?,?,?,?,?,?,?)";
		return insert(sql,hotel.getUser_id(),hotel.getProvince_id(),hotel.getHotelName(),
				hotel.getHotelDescription(),hotel.getHotelAddress(),hotel.getImage(),hotel.getCreatedDate(),hotel.getHotelEmail(),hotel.getHotelPhone(),hotel.getRoomQuantity());		
	}

	@Override
	public List<HotelModel> Search(Timestamp checkinDate, Timestamp checkoutDate, Long provinceId, Long typeroomId,
			Long bedQuantity,Integer startPage,Integer endPage) {

		String sql = "select distinct hotel.*" + 
				" from hotel " + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" inner join booking on hotel.id = booking.hotel_id" + 
				" where hotelroom.type_id = ?" + 
				" and hotelroom.bed_quantity = ?" + 
				" and hotel.province_id = ?" +
				" and ((booking.checkin_date > ? and booking.checkin_date > ?) or (booking.checkout_date < ? and booking.checkout_date <  ?))" +
		        " limit ?, ?";
		return query(sql,new HotelMapper(),typeroomId,bedQuantity,provinceId,checkinDate,checkoutDate,checkinDate,checkoutDate,startPage,endPage);

	}

	@Override
	public Integer countMaxItem(Timestamp checkinDate, Timestamp checkoutDate, Long provinceId, Long typeroomId,
			Long bedQuantity) {
		String sql = "select count(distinct hotel.id)" + 
				" from hotel " + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" inner join booking on hotel.id = booking.hotel_id" + 
				" where hotelroom.type_id = ?" + 
				" and hotelroom.bed_quantity = ?" + 
				" and hotel.province_id = ?" +
				" and ((booking.checkin_date > ? and booking.checkin_date > ?) or (booking.checkout_date < ? and booking.checkout_date <  ?))";
		return count(sql,typeroomId,bedQuantity,provinceId,checkinDate,checkoutDate,checkinDate,checkoutDate);
	}

	@Override
	public HotelModel findOne(Long id) {
		String sql = "select * from hotel where id = ?";
		List<HotelModel> data = query(sql,new HotelMapper(),id);
		return data.isEmpty() ? null : data.get(0);
	}

	@Override
	public HotelModel findOne(HotelRoomModel hotelroom) {
		String sql = "select distinct hotel.* " + 
				" from hotel" + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" where hotel.id = ?";
		return query(sql,new HotelMapper(),hotelroom.getHotel_id()).get(0);
	}
	@Override
	public void updateHotel(HotelModel hotel) {
		String sql = "update hotel set hotel_name = ?, hotel_desc=?,hotel_address=?,hotel_phone=?,hotel_email=?,room_quantity=?,image=?,modifieddate=? where id = ?";
		update(sql,hotel.getHotelName(),hotel.getHotelDescription(),hotel.getHotelAddress(),hotel.getHotelPhone(),hotel.getHotelEmail(),
				hotel.getRoomQuantity(),hotel.getImage(),hotel.getModifiedDate(),hotel.getId());
	}

	@Override
	public HotelModel findOneByRoomId(Long room_id) {
		String sql = "select distinct hotel.* " + 
				" from hotel" + 
				" inner join hotelroom on hotel.id = hotelroom.hotel_id" + 
				" where hotelroom.id = ?";
		List<HotelModel> data = query(sql,new HotelMapper(),room_id);
		return data.isEmpty() ? null : data.get(0);
	}

	@Override
	public HotelModel findOneByUserId(Long user_id) {
		String sql = "select * from hotel where user_id = ?";
		List<HotelModel> data = query(sql,new HotelMapper(),user_id);
		return data.isEmpty() ? null : data.get(0);
	}


}
