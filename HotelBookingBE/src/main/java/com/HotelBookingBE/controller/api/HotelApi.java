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

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.service.IHotelService;
import com.HotelBookingBE.model.service.impl.HotelService;
import com.google.gson.Gson;


@WebServlet(urlPatterns = {"/hotel/search"})
public class HotelApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private IHotelService hotelService;
    public HotelApi() {
    	hotelService = new HotelService();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		ObjectMapper mapper = new ObjectMapper();
//		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		response.setContentType("application/json; charset=UTF-8");
		
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		
		Long provinceId = Long.parseLong(request.getParameter("province_id"));
		Timestamp checkoutDate = new Timestamp(Date.valueOf(request.getParameter("checkout_date")).getTime());
		Timestamp checkinDate = new Timestamp(Date.valueOf(request.getParameter("checkin_date")).getTime());
		Long typeroomId =  Long.parseLong(request.getParameter("type_room_id"));
		Long bedQuantity =  Long.parseLong(request.getParameter("bed_quantity"));
		int page = Integer.parseInt(request.getParameter("page"));
		
		
		HotelModel hotel = new HotelModel();
		hotel = hotelService.Search(checkinDate, checkoutDate, provinceId, typeroomId, bedQuantity,page); 
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("page", hotel.getPage());
		map.put("maxPageItem", hotel.getMaxPageItem());
		map.put("totalPage", hotel.getTotalPage());
		map.put("hotels", hotel.getShortModels());
//		mapper.writeValue(response.getOutputStream(), new JSONPObject(mapper.writeValueAsString(map), 1));
		out.print(gson.toJson(map));
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


	}

}
