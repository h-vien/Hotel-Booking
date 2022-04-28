package com.HotelBookingBE.controller.api;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.service.IHotelService;
import com.HotelBookingBE.model.service.IUserService;
import com.HotelBookingBE.model.service.impl.HotelService;
import com.HotelBookingBE.model.service.impl.UserService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;


@WebServlet(urlPatterns = {"/user","/user/login","/user/register","/user/manager"})
public class UserApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private IUserService userService;
	private IHotelService hotelService;
	public UserApi()
	{
		hotelService = new HotelService();
		userService = new UserService();
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();

		
		if(HttpUtil.getPathURL(request.getRequestURI()).equals("login"))
		{
			UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
//			HashMap<String,Object> map1 = mapper.readValue(s, HashMap.class);
//			map1.entrySet().forEach(System.out::println);
			user = userService.findOne(user);
			if(user == null)
			{
				mapper.writeValue(response.getOutputStream(), "Khong tim thay user");
			} else 	
			{
				mapper.writeValue(response.getOutputStream(), user);
				session.setAttribute("user", user);
			}
		} 
		else if(HttpUtil.getPathURL(request.getRequestURI()).equals("register"))
		{
			UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
			userService.saveUser(user);		
			mapper.writeValue(response.getOutputStream(), "Ban da dang ki thanh cong");
		}
		else if(HttpUtil.getPathURL(request.getRequestURI()).equals("manager"))
		{
			UserModel user = (UserModel) session.getAttribute("user");
			HotelModel hotel = mapper.readValue(HttpUtil.getjson(request.getReader()), HotelModel.class);
			hotelService.save(hotel, user);
		}
		
		
	}

}
