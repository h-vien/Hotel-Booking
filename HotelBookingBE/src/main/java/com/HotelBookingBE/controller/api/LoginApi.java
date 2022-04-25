package com.HotelBookingBE.controller.api;

import java.io.IOException;
import java.io.OutputStream;

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

@WebServlet(urlPatterns = {"/Login","/register"})
public class LoginApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private IUserService userService;
	public LoginApi()
	{
		userService = new UserService();
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		UserModel user = userService.findOne(email,password);
		if(user == null) {
			mapper.writeValue(response.getOutputStream(), null);
		}else {
			mapper.writeValue(response.getOutputStream(), user);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		request.setCharacterEncoding("UTF-8");
//		String s = "{\"password\":\"1234\",\"fisrtName\":\"nhat\",\"lastName\":\"minh\",\"email\":\"dangvannhatminh93@gmail.com\"}";
		UserModel user = mapper.readValue(HttpUtil.getjson(request.getReader()), UserModel.class);
		userService.saveUser(user);
	}

}
