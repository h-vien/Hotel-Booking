package com.HotelBookingBE.controller.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.impl.HotelRoomService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@WebServlet(urlPatterns = {"/hotel/room","/hotel/room/search","/hotel/room/searchAll","/hotel/room/*"})
public class HotelRoomApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	IHotelRoomService hotelroomService;
    public HotelRoomApi() {
    	hotelroomService = new HotelRoomService();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    response.setCharacterEncoding("UTF-8");
	    response.setContentType("application/json");
	    PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		
		Long hotelId = Long.parseLong(request.getParameter("hotel_id"));
		int page =Integer.parseInt(request.getParameter("page"));
		HotelRoomModel room = new HotelRoomModel();

		
		if(HttpUtil.getPathURL(request.getRequestURI()).equals("search")) {
			Timestamp checkoutDate = new Timestamp(Date.valueOf(request.getParameter("checkout_date")).getTime());
			Timestamp checkinDate = new Timestamp(Date.valueOf(request.getParameter("checkin_date")).getTime());
			Long typeroomId =  Long.parseLong(request.getParameter("type_room_id"));
			Long bedQuantity =  Long.parseLong(request.getParameter("bed_quantity"));
			room= hotelroomService.Search(checkinDate, checkoutDate, hotelId, typeroomId, bedQuantity,page); 
		}
		else  if(HttpUtil.getPathURL(request.getRequestURI()).equals("searchAll")) {
			room= hotelroomService.SearchAll(hotelId,page);
		}
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("page", room.getPage());
		map.put("maxPageItem", room.getMaxPageItem());
		map.put("totalPage", room.getTotalPage());
		map.put("rooms", room.getShortRooms());
		
		out.print(gson.toJson(map));
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");		
		HotelRoomModel room = mapper.readValue(HttpUtil.getjson(request.getReader()), HotelRoomModel.class);
		hotelroomService.save(room);
	}
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setCharacterEncoding("UTF-8");
	    response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");		
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		HotelRoomModel room = mapper.readValue(HttpUtil.getjson(request.getReader()) , HotelRoomModel.class);
		HotelRoomModel temp = hotelroomService.findOnebyRoomId(room.getId());
		if(temp == null)
		{
			response.setStatus(405);
			out.print(gson.toJson(HttpUtil.toJsonObject("Không tìm thấy room")));
		} else 
		{
			hotelroomService.Update(room);
			out.print(gson.toJson(hotelroomService.findOnebyRoomId(room.getId())));
		}
	}
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		Long room_id = Long.parseLong(HttpUtil.getPathURL(request.getRequestURI()));
		System.out.print(room_id);
		hotelroomService.Delete(room_id);
	}
	
}
