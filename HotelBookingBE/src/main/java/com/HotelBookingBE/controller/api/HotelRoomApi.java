package com.HotelBookingBE.controller.api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.service.IHotelRoomService;
import com.HotelBookingBE.model.service.impl.HotelRoomService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@WebServlet(urlPatterns = {"/hotel/room"})
public class HotelRoomApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	IHotelRoomService hotelroomService;
    public HotelRoomApi() {
    	hotelroomService = new HotelRoomService();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		
		HotelRoomModel room = mapper.readValue(HttpUtil.getjson(request.getReader()), HotelRoomModel.class);
		HotelModel hotel= (HotelModel) session.getAttribute("hotel");
		hotelroomService.save(room, hotel);
		
	}

}
