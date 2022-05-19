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
import javax.servlet.http.HttpSession;

import com.HotelBookingBE.model.HotelModel;
import com.HotelBookingBE.model.HotelRoomModel;
import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.model.service.IHotelService;
import com.HotelBookingBE.model.service.IUserService;
import com.HotelBookingBE.model.service.impl.HotelService;
import com.HotelBookingBE.model.service.impl.UserService;
import com.HotelBookingBE.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;


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
//		ObjectMapper mapper = new ObjectMapper();
//		mapper.enable(SerializationFeature.INDENT_OUTPUT);
//		response.setContentType("application/json");
//		request.setCharacterEncoding("UTF-8");
//		// lay thong tin user khong can session
//		//		mapper.writeValue(response.getOutputStream(), session.getAttribute("user"));
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.enable(SerializationFeature.INDENT_OUTPUT);

		response.setCharacterEncoding("UTF-8");
	    response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();

		
		if(HttpUtil.getPathURL(request.getRequestURI()).equals("login"))
		{
			UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
			user = userService.findOne(user);
			if(user == null)
			{
				response.setStatus(405);
				out.print(gson.toJson(HttpUtil.toJsonObject("Không tìm thấy user")));
//				mapper.writeValue(response.getOutputStream(), HttpUtil.toJsonObject("Không tìm thấy user"));
				//set status
			} else 	
			{
				Map<String,Object> map = new HashMap<>();
				map.put("user", user);
				HotelModel hotel = new HotelModel();
				if(user.getRoleId() == 2L)
				{
					hotel = hotelService.findOne(user);
					map.put("hotel", hotel);
					//rut gon thong tin response
				} else
				{
					map.put("hotel", "");
				}
				out.print(gson.toJson(map));
//				mapper.writeValue(response.getOutputStream(), new JSONPObject(mapper.writeValueAsString(map), 1));
				
			}
		} 
		else if(HttpUtil.getPathURL(request.getRequestURI()).equals("register"))
		{
			UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
			userService.saveUser(user);			
			out.print(gson.toJson(HttpUtil.toJsonObject("Đăng kí thành công")));
//			mapper.writeValue(response.getOutputStream(), HttpUtil.toJsonObject("Đăng kí thành công"));
			//set status
		}
		else if(HttpUtil.getPathURL(request.getRequestURI()).equals("manager"))
		{
			HotelModel hotel = mapper.readValue(HttpUtil.getjson(request.getReader()), HotelModel.class);
			Long id = hotelService.save(hotel);
			hotel = hotelService.findOne(id);
			out.print(gson.toJson(hotel));
			//	mapper.writeValue(response.getOutputStream(), hotel);
		}
	}
	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("test");
			ObjectMapper mapper = new ObjectMapper();

			response.setCharacterEncoding("UTF-8");
		    response.setContentType("application/json");
			request.setCharacterEncoding("UTF-8");		
			PrintWriter out = response.getWriter();
			Gson gson = new Gson();
			UserModel u= mapper.readValue(HttpUtil.getjson(request.getReader()) , UserModel.class);	
		
			u = userService.findOne(u.getId());
			if(u == null)
			{
				response.setStatus(405);
				out.print(gson.toJson(HttpUtil.toJsonObject("Không tìm thấy user")));

			} else 	
			{
				
				userService.updateUser(u);
				out.print(gson.toJson(HttpUtil.toJsonObject("Cập nhập thành công")));
			}
	}

}