package com.HotelBookingBE.controller.api;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.ProvinceModel;
import com.HotelBookingBE.model.service.IProvinceService;
import com.HotelBookingBE.model.service.impl.ProvinceService;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebServlet(urlPatterns = {"/province"})
public class ProvinceApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private IProvinceService provinceSer;
    public ProvinceApi()
    {
    	provinceSer = new ProvinceService();
    }
	



	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		List<ProvinceModel> data = provinceSer.findAll();

		response.setCharacterEncoding("UTF-8");
	    response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		mapper.writeValue(response.getOutputStream(), data);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
