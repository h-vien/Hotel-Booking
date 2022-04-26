package com.HotelBookingBE.controller.api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.service.IUserService;
import com.HotelBookingBE.model.service.impl.UserService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebServlet(urlPatterns = {"/user","/user/login","/user/register"})
public class UserApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private IUserService userService;
	public UserApi()
	{
		userService = new UserService();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		System.out.print(HttpUtil.getPathURL(request.getRequestURI()));
		if(HttpUtil.getPathURL(request.getRequestURI()).equals("login"))
		{
			UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
			user = userService.findOne(user);
			if(user == null)
			{
				mapper.writeValue(response.getOutputStream(), "Khong tim thay user");
			} else 
			{
				mapper.writeValue(response.getOutputStream(), user);
			}
		} 
		else if(HttpUtil.getPathURL(request.getRequestURI()).equals("register"))
		{
			UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
			userService.saveUser(user);		
			mapper.writeValue(response.getOutputStream(), "Ban da dang ki thanh cong");
		}
		
		
	}

}
