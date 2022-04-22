package com.HotelBookingBE.utils;

import java.io.BufferedReader;
import java.io.IOException;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

public class HttpUtil {
	public String value;
	public HttpUtil(String value) {
		this.value = value;
	}
	public <T> T toModel(Class<T> tClass)
	{
		try {
			return new ObjectMapper().readValue(value, tClass);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public static HttpUtil of (BufferedReader reader)
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
		
		return new HttpUtil(sb.toString());
	}

}
