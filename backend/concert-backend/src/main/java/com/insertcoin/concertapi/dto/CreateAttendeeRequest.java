package com.insertcoin.concertapi.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateAttendeeRequest {

	@NotBlank
	private String firstName;

	@NotBlank
	private String lastName;

	@NotBlank
	@Email
	private String email;

	@NotNull
	@Min(1)
	private Integer ticketsPurchased;

	@NotNull
	private Long concertId;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getTicketsPurchased() {
		return ticketsPurchased;
	}

	public void setTicketsPurchased(Integer ticketsPurchased) {
		this.ticketsPurchased = ticketsPurchased;
	}

	public Long getConcertId() {
		return concertId;
	}

	public void setConcertId(Long concertId) {
		this.concertId = concertId;
	}
}
