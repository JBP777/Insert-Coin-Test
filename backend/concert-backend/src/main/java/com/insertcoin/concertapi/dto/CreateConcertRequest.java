package com.insertcoin.concertapi.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class CreateConcertRequest {

	@NotBlank
	private String name;

	@NotBlank
	private String artist;

	@NotBlank
	private String venue;

	@NotNull
	@Future
	private LocalDateTime concertDate;

	@NotNull
	@Min(1)
	private Integer availableTickets;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public LocalDateTime getConcertDate() {
		return concertDate;
	}

	public void setConcertDate(LocalDateTime concertDate) {
		this.concertDate = concertDate;
	}

	public Integer getAvailableTickets() {
		return availableTickets;
	}

	public void setAvailableTickets(Integer availableTickets) {
		this.availableTickets = availableTickets;
	}
}
