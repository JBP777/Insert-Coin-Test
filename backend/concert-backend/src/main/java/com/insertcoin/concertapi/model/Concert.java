package com.insertcoin.concertapi.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "concerts")
public class Concert {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String artist;

	@Column(nullable = false)
	private String venue;

	@Column(nullable = false)
	private LocalDateTime concertDate;

	@Column(nullable = false)
	private Integer availableTickets;

	@OneToMany(mappedBy = "concert", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Attendee> attendees = new ArrayList<>();

	public Concert() {
	}

	public Concert(String name, String artist, String venue, LocalDateTime concertDate, Integer availableTickets) {
		this.name = name;
		this.artist = artist;
		this.venue = venue;
		this.concertDate = concertDate;
		this.availableTickets = availableTickets;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public List<Attendee> getAttendees() {
		return attendees;
	}

	public void setAttendees(List<Attendee> attendees) {
		this.attendees.clear();
		if (attendees != null) {
			attendees.forEach(this::addAttendee);
		}
	}

	public void addAttendee(Attendee attendee) {
		attendees.add(attendee);
		attendee.setConcert(this);
	}

	public void removeAttendee(Attendee attendee) {
		attendees.remove(attendee);
		attendee.setConcert(null);
	}
}
