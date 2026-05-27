import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_BASE_URL = 'http://localhost:8080/api';

export interface Concert {
  id: number;
  name: string;
  artist: string;
  venue: string;
  concertDate: string;
  availableTickets: number;
  attendees?: Attendee[];
}

export interface Attendee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ticketsPurchased: number;
}

export interface CreateConcertRequest {
  name: string;
  artist: string;
  venue: string;
  concertDate: string;
  availableTickets: number;
}

export interface CreateAttendeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  ticketsPurchased: number;
  concertId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {

  private readonly apiUrl = API_BASE_URL;

  constructor(private readonly http: HttpClient) { }

  obtenerConciertos(): Observable<Concert[]> {
    return this.http.get<Concert[]>(`${this.apiUrl}/concerts`);
  }

  obtenerConciertoById(id: number): Observable<Concert> {
    return this.http.get<Concert>(`${this.apiUrl}/concerts/${id}`);
  }

  crearConcierto(request: CreateConcertRequest): Observable<Concert> {
    return this.http.post<Concert>(`${this.apiUrl}/concerts`, request);
  }

  obtenerAsistentesPorConcierto(concertId: number): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(`${this.apiUrl}/concerts/${concertId}/attendees`);
  }

  crearAsistente(request: CreateAttendeeRequest): Observable<Attendee> {
    return this.http.post<Attendee>(`${this.apiUrl}/attendees`, request);
  }
}
