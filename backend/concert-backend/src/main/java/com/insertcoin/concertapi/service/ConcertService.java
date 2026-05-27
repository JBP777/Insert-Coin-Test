package com.insertcoin.concertapi.service;

import com.insertcoin.concertapi.dto.CreateConcertRequest;
import com.insertcoin.concertapi.exception.ResourceNotFoundException;
import com.insertcoin.concertapi.model.Concert;
import com.insertcoin.concertapi.repository.ConcertRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ConcertService {

	private final ConcertRepository concertRepository;

	public ConcertService(ConcertRepository concertRepository) {
		this.concertRepository = concertRepository;
	}

	@Transactional(readOnly = true)
	public List<Concert> findAll() {
		return concertRepository.findAll();
	}

	@Transactional(readOnly = true)
	public Concert findById(Long id) {
		return concertRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Concert not found with id: " + id));
	}

	@Transactional
	public Concert create(CreateConcertRequest request) {
		Concert concert = new Concert(
				request.getName(),
				request.getArtist(),
				request.getVenue(),
				request.getConcertDate(),
				request.getAvailableTickets()
		);

		return concertRepository.save(concert);
	}
}
