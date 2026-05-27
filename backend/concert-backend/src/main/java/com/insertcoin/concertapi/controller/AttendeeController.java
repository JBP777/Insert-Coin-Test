package com.insertcoin.concertapi.controller;

import com.insertcoin.concertapi.dto.CreateAttendeeRequest;
import com.insertcoin.concertapi.model.Attendee;
import com.insertcoin.concertapi.service.AttendeeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/attendees")
public class AttendeeController {

	private final AttendeeService attendeeService;

	public AttendeeController(AttendeeService attendeeService) {
		this.attendeeService = attendeeService;
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Attendee create(@Valid @RequestBody CreateAttendeeRequest request) {
		return attendeeService.create(request);
	}
}
