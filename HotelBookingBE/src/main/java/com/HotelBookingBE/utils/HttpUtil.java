package com.HotelBookingBE.utils;

import java.io.BufferedReader;
import java.io.IOException;



public class HttpUtil {
	public static String getjson(BufferedReader reader)
	{
		StringBuilder sb = new StringBuilder();
		try {
			String line;
			while( (line = reader.readLine()) != null)
			{
				sb.append(line);
			}
		} catch(IOException e)
		{
			System.out.print(e.getMessage());
		}
		
		return sb.toString();
	}
	public static String getPathURL(String s)
	{
		String[] sarr = s.split("/");
		return sarr[sarr.length-1];
	}

}
