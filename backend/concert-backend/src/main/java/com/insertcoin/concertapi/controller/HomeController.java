package com.insertcoin.concertapi.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping("/")
	public Map<String, Object> home() {
		return Map.of(
				"message", "Concert API is running",
				"endpoints", Map.of(
						"concerts", "/api/concerts",
						"h2Console", "/h2-console"
				)
		);
	}
}
