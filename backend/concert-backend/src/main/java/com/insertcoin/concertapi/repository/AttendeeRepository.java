package com.insertcoin.concertapi.repository;

import com.insertcoin.concertapi.model.Attendee;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {

	List<Attendee> findByConcertId(Long concertId);
}
