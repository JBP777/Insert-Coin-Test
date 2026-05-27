package com.insertcoin.concertapi.repository;

import com.insertcoin.concertapi.model.Concert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConcertRepository extends JpaRepository<Concert, Long> {
}
