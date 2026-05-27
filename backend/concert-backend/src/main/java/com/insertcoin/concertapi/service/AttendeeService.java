package com.insertcoin.concertapi.service;

import com.insertcoin.concertapi.dto.CreateAttendeeRequest;
import com.insertcoin.concertapi.exception.ResourceNotFoundException;
import com.insertcoin.concertapi.model.Attendee;
import com.insertcoin.concertapi.model.Concert;
import com.insertcoin.concertapi.repository.AttendeeRepository;
import com.insertcoin.concertapi.repository.ConcertRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AttendeeService {

	private final AttendeeRepository attendeeRepository;
	private final ConcertRepository concertRepository;

	public AttendeeService(AttendeeRepository attendeeRepository, ConcertRepository concertRepository) {
		this.attendeeRepository = attendeeRepository;
		this.concertRepository = concertRepository;
	}

	@Transactional(readOnly = true)
	public List<Attendee> findByConcertId(Long concertId) {
		ensureConcertExists(concertId);
		return attendeeRepository.findByConcertId(concertId);
	}

	@Transactional
	public Attendee create(CreateAttendeeRequest request) {
		Concert concert = ensureConcertExists(request.getConcertId());
		Attendee attendee = new Attendee(
				request.getFirstName(),
				request.getLastName(),
				request.getEmail(),
				request.getTicketsPurchased()
		);
		attendee.setConcert(concert);

		return attendeeRepository.save(attendee);
	}

	private Concert ensureConcertExists(Long concertId) {
		return concertRepository.findById(concertId)
				.orElseThrow(() -> new ResourceNotFoundException("Concert not found with id: " + concertId));
	}
}
