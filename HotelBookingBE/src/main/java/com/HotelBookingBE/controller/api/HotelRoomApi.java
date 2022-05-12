package com.HotelBookingBE.controller.api;

import java.io.IOException;

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

@WebServlet(urlPatterns = {"/hotel/room"})
public class HotelRoomApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	IHotelRoomService hotelroomService;
    public HotelRoomApi() {
    	hotelroomService = new HotelRoomService();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.print(1);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");		
		HotelRoomModel room = mapper.readValue(HttpUtil.getjson(request.getReader()), HotelRoomModel.class);
		hotelroomService.save(room);
		System.out.print(1);
	}

}
