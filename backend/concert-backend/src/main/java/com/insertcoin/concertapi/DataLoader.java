package com.insertcoin.concertapi;

import com.insertcoin.concertapi.model.Attendee;
import com.insertcoin.concertapi.model.Concert;
import com.insertcoin.concertapi.repository.ConcertRepository;
import java.time.LocalDateTime;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

	private final ConcertRepository concertRepository;

	public DataLoader(ConcertRepository concertRepository) {
		this.concertRepository = concertRepository;
	}

	@Override
	public void run(String... args) {
		if (concertRepository.count() > 0) {
			return;
		}

		Concert indieNight = new Concert(
				"Indie Night Live",
				"The Midnight Echoes",
				"Insert Coin Arena",
				LocalDateTime.now().plusMonths(1),
				250
		);
		indieNight.addAttendee(new Attendee("Lucia", "Martinez", "lucia.martinez@example.com", 2));
		indieNight.addAttendee(new Attendee("Daniel", "Garcia", "daniel.garcia@example.com", 1));

		Concert rockFestival = new Concert(
				"Summer Rock Fest",
				"Neon Voltage",
				"Central Park Stage",
				LocalDateTime.now().plusMonths(2),
				500
		);
		rockFestival.addAttendee(new Attendee("Sofia", "Lopez", "sofia.lopez@example.com", 3));
		rockFestival.addAttendee(new Attendee("Mario", "Santos", "mario.santos@example.com", 2));

		concertRepository.save(indieNight);
		concertRepository.save(rockFestival);
	}
}
