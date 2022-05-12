package com.HotelBookingBE.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.HotelBookingBE.constant.SystemConstant;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;



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
	public static JSONPObject toJsonObject(String s)
	{
		ObjectMapper mapper = new ObjectMapper();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(SystemConstant.Message, s);
		try {
			return new JSONPObject(mapper.writeValueAsString(map), 1);
		} catch (JsonProcessingException e) {
			return null;
		}
	}

}