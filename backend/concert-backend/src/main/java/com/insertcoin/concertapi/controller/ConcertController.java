package com.insertcoin.concertapi.controller;

import com.insertcoin.concertapi.dto.CreateConcertRequest;
import com.insertcoin.concertapi.model.Attendee;
import com.insertcoin.concertapi.model.Concert;
import com.insertcoin.concertapi.service.AttendeeService;
import com.insertcoin.concertapi.service.ConcertService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/concerts")
public class ConcertController {

	private final ConcertService concertService;
	private final AttendeeService attendeeService;

	public ConcertController(ConcertService concertService, AttendeeService attendeeService) {
		this.concertService = concertService;
		this.attendeeService = attendeeService;
	}

	@GetMapping
	public List<Concert> findAll() {
		return concertService.findAll();
	}

	@GetMapping("/{id}")
	public Concert findById(@PathVariable Long id) {
		return concertService.findById(id);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Concert create(@Valid @RequestBody CreateConcertRequest request) {
		return concertService.create(request);
	}

	@GetMapping("/{id}/attendees")
	public List<Attendee> findAttendeesByConcertId(@PathVariable Long id) {
		return attendeeService.findByConcertId(id);
	}
}
