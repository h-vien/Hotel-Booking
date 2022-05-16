package com.HotelBookingBE.controller.api;

import java.io.IOException;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.impl.HotelRoomService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.JSONPObject;

@WebServlet(urlPatterns = {"/hotel/room","/hotel/room/search","/hotel/room/searchAll",})
public class HotelRoomApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	IHotelRoomService hotelroomService;
    public HotelRoomApi() {
    	hotelroomService = new HotelRoomService();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		
		if(HttpUtil.getPathURL(request.getRequestURI()).equals("search")) {
			Long hotelId = Long.parseLong(request.getParameter("hotel_id"));
			Timestamp checkoutDate = new Timestamp(Date.valueOf(request.getParameter("checkout_date")).getTime());
			Timestamp checkinDate = new Timestamp(Date.valueOf(request.getParameter("checkin_date")).getTime());
			Long typeroomId =  Long.parseLong(request.getParameter("type_room_id"));
			Long bedQuantity =  Long.parseLong(request.getParameter("bed_quantity"));
			int page = Integer.parseInt(request.getParameter("page"));
			
			HotelRoomModel room = new HotelRoomModel();
			
			room= hotelroomService.Search(checkinDate, checkoutDate, hotelId, typeroomId, bedQuantity,page); 
			
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("page", room.getPage());
			map.put("maxPageItem", room.getMaxPageItem());
			map.put("totalPage", room.getTotalPage());
			map.put("rooms", room.getResults());
			mapper.writeValue(response.getOutputStream(), new JSONPObject(mapper.writeValueAsString(map), 1));
		}
		else  if(HttpUtil.getPathURL(request.getRequestURI()).equals("searchAll")) {
				Long hotelId = Long.parseLong(request.getParameter("hotel_id"));
				int page =Integer.parseInt(request.getParameter("page"));
				System.out.println("hehe");
				HotelRoomModel room = new HotelRoomModel();
				room= hotelroomService.SearchAll(hotelId,page);
				
				Map<String,Object> map = new HashMap<String,Object>();
				map.put("page", room.getPage());
				map.put("maxPageItem", room.getMaxPageItem());
				map.put("totalPage", room.getTotalPage());
				map.put("rooms", room.getResults());
				mapper.writeValue(response.getOutputStream(), new JSONPObject(mapper.writeValueAsString(map), 1));
			
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");		
		HotelRoomModel room = mapper.readValue(HttpUtil.getjson(request.getReader()), HotelRoomModel.class);
		hotelroomService.save(room);
	}

}
