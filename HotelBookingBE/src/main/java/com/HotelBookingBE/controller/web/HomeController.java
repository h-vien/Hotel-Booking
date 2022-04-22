package com.HotelBookingBE.controller.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.UserModel;
import com.HotelBookingBE.service.IUserService;
import com.HotelBookingBE.service.impl.UserService;


@WebServlet(urlPatterns = {"/trang-chu"})
public class HomeController extends HttpServlet {
	
	
	private static final long serialVersionUID = -8404487490153647739L;
	private IUserService userService;
	public HomeController()
	{
		userService = new UserService();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {					
		RequestDispatcher rd = request.getRequestDispatcher("/views/web/home.html");
		rd.forward(request, response);
		List<UserModel> results = userService.findAllUser();
		System.out.print(123);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
}
