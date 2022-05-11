package com.HotelBookingBE.controller.web;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(urlPatterns = {"/trang-chu"})
public class HomeController extends HttpServlet {
	
	
	private static final long serialVersionUID = -8404487490153647739L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {					
		RequestDispatcher rd = request.getRequestDispatcher("/views/home.jsp");
		rd.forward(request, response);
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
}
