import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Concierto {
  id: number;
  nombre: string;
  artista: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  precio: number;
  imagen: string;
  duracion: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {

  private readonly conciertos: Concierto[] = [
    {
      id: 1,
      nombre: 'Concierto de Verano - Rock',
      artista: 'The Electric Vibes',
      fecha: '15 de Junio 2024',
      lugar: 'Estadio Principal, Madrid',
      descripcion: 'Un espectáculo de rock en vivo con las mejores canciones de la década. Incluye efectos pirotécnicos y una producción de clase mundial.',
      precio: 45.99,
      imagen: 'assets/concierto1.jpg',
      duracion: '2 horas 30 minutos',
      genero: 'Rock'
    },
    {
      id: 2,
      nombre: 'Festival Jazz 2024',
      artista: 'Miles Jackson Quartet',
      fecha: '22 de Julio 2024',
      lugar: 'Auditorio Municipal, Barcelona',
      descripcion: 'Una noche de jazz elegante con músicos de renombre internacional. Perfecta para los amantes de la música clásica moderna.',
      precio: 55.99,
      imagen: 'assets/concierto2.jpg',
      duracion: '3 horas',
      genero: 'Jazz'
    },
    {
      id: 3,
      nombre: 'Clásicos en Vivo - Sinfónica',
      artista: 'Orquesta Filarmónica Nacional',
      fecha: '10 de Agosto 2024',
      lugar: 'Teatro Real, Madrid',
      descripcion: 'Una experiencia sinfónica única con las obras maestras de los compositores clásicos. Dirección de maestros reconocidos mundialmente.',
      precio: 65.99,
      imagen: 'assets/concierto3.jpg',
      duracion: '2 horas 45 minutos',
      genero: 'Clásica'
    }
  ];

  constructor() { }

  /**
   * Obtiene todos los conciertos
   * REQUISITO: Observables en servicios
   */
  obtenerConciertos(): Observable<Concierto[]> {
    return of(this.conciertos);
  }

  /**
   * Obtiene un concierto por ID
   * REQUISITO: Observables en servicios
   */
  obtenerConciertoById(id: number): Observable<Concierto | undefined> {
    return of(this.conciertos.find(c => c.id === id));
  }
}
