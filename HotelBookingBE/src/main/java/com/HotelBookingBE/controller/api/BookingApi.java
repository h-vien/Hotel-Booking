package com.HotelBookingBE.controller.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HotelBookingBE.model.BookingModel;
import com.HotelBookingBE.model.service.IBookingService;
import com.HotelBookingBE.model.service.IHotelService;
import com.HotelBookingBE.model.service.impl.BookingService;
import com.HotelBookingBE.model.service.impl.HotelService;
import com.HotelBookingBE.utils.HttpUtil;
import com.google.gson.Gson;

@WebServlet(urlPatterns = { "/booking", "/booking/user", "/booking/hotel","/booking/hotel/revenue"})
public class BookingApi extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private IBookingService bookingService;
	private IHotelService hotelSerivce;

	public BookingApi() {
		bookingService = new BookingService();
		hotelSerivce = new HotelService();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		
		if(HttpUtil.getPathURL(request.getRequestURI()).equals("revenue"))
		{
			Integer month = Integer.parseInt(request.getParameter("month"));
			Long hotel_id = Long.parseLong(request.getParameter("hotel_id"));
			out.print(gson.toJson(bookingService.getRevenueByMonth(hotel_id, month)));
			
		}
		else
		{
			BookingModel book = new BookingModel();
			int page = Integer.parseInt(request.getParameter("page"));
			String sort = request.getParameter("sort");
			String direction = request.getParameter("direction");

			
			Map<String, Object> map = new HashMap<String, Object>();
			if (HttpUtil.getPathURL(request.getRequestURI()).equals("user")) {
				Long user_id = Long.parseLong(request.getParameter("user_id"));
				book = bookingService.SearchByUserId(user_id, page);
				map.put("books", book.getShortBookings());
			} else {
				Long hotel_id = Long.parseLong(request.getParameter("hotel_id"));
				Integer status = Integer.parseInt(request.getParameter("status"));
				book = bookingService.SearchByHotelId(hotel_id, status, page,sort,direction);
				map.put("books", book.getResults());
			}

			map.put("page", book.getPage());
			map.put("maxPageItem", book.getMaxPageItem());
			map.put("totalPage", book.getTotalPage());
			out.print(gson.toJson(map));
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		BookingModel book = gson.fromJson(HttpUtil.getjson(request.getReader()), BookingModel.class);
			Long id = bookingService.save(book);
			if (id == null) {
				response.setStatus(405);
			}

	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		
		BookingModel book = gson.fromJson(HttpUtil.getjson(request.getReader()), BookingModel.class);
		if (hotelSerivce.findOne(book.getHotel_id()) != null) {
			bookingService.UpdateValidStatus(book.getId(),book.getStatus());
			out.print(gson.toJson(HttpUtil.toJsonObject("Cập nhật trạng thái thành công")));
		} else {
			response.setStatus(405);
			out.print(gson.toJson(HttpUtil.toJsonObject("Cập nhật trạng thái không thành công")));
		}
	}

}
