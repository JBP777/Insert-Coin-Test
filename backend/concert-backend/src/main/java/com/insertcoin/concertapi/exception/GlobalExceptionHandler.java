package com.insertcoin.concertapi.exception;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, Object> handleResourceNotFound(ResourceNotFoundException exception) {
		return error(HttpStatus.NOT_FOUND, exception.getMessage());
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String, Object> handleValidation(MethodArgumentNotValidException exception) {
		Map<String, String> errors = new HashMap<>();
		for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
			errors.put(fieldError.getField(), fieldError.getDefaultMessage());
		}

		Map<String, Object> response = error(HttpStatus.BAD_REQUEST, "Validation failed");
		response.put("errors", errors);
		return response;
	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String, Object> handleMalformedRequest() {
		return error(HttpStatus.BAD_REQUEST, "Malformed request body");
	}

	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String, Object> handleTypeMismatch(MethodArgumentTypeMismatchException exception) {
		String message = "Invalid value for parameter: " + exception.getName();
		return error(HttpStatus.BAD_REQUEST, message);
	}

	@ExceptionHandler(IllegalArgumentException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String, Object> handleIllegalArgument(IllegalArgumentException exception) {
		return error(HttpStatus.BAD_REQUEST, exception.getMessage());
	}

	private Map<String, Object> error(HttpStatus status, String message) {
		Map<String, Object> response = new HashMap<>();
		response.put("status", status.value());
		response.put("error", status.getReasonPhrase());
		response.put("message", message);
		return response;
	}
}
