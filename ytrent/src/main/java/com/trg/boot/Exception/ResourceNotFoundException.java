package com.trg.boot.Exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
   /**
	 * 
	 */
	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String, String>> handleException(Exception ex) {
	    Map<String, String> error = new HashMap<>();
	    error.put("message", ex.getMessage());
	    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}

	private static final long serialVersionUID = -763044985563700053L;
private String resourseName;
 private String fieldName;
 private Object fieldValue;
public ResourceNotFoundException(String resourseName, String fieldName, Object fieldValue) {
	super(String.format("%s not found with %s :'%s'",resourseName,fieldName,fieldValue));
	this.resourseName = resourseName;
	this.fieldName = fieldName;
	this.fieldValue = fieldValue;
}
public ResourceNotFoundException(String string) {
	// TODO Auto-generated constructor stub
}
public String getResourseName() {
	return resourseName;
}
public String getFieldName() {
	return fieldName;
}
public Object getFieldValue() {
	return fieldValue;
}
}
