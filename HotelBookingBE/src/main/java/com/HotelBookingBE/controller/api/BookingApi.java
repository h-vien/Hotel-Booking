package com.HotelBookingBE.controller.api;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.service.IBookingService;
import com.HotelBookingBE.model.service.impl.BookingService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebServlet(urlPatterns = {"/booking","/booking/user"})
public class BookingApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private IBookingService bookingService;
    public BookingApi() {
    	bookingService = new BookingService();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		ObjectMapper mapper = new ObjectMapper();
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		ObjectMapper mapper = new ObjectMapper();
		BookingModel book = mapper.readValue(HttpUtil.getjson(request.getReader()), BookingModel.class);
		Long id = bookingService.save(book);
		if(id == null)
		{
			response.setStatus(405);
		} 
	}

}
