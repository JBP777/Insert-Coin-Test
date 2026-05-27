import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConciertoService, Concierto } from '../services/concierto.service';

@Component({
  selector: 'app-registro-concierto',
  templateUrl: './registro-concierto.component.html',
  styleUrls: ['./registro-concierto.component.sass']
})
export class RegistroConciertoComponent implements OnInit {

  conciertos: Concierto[] = [];
  cargando = true;

  constructor(
    private readonly conciertoService: ConciertoService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.cargarConciertos();
  }

  /**
   * Carga la lista de conciertos desde el servicio
   * REQUISITO: Observables en servicios
   */
  cargarConciertos(): void {
    this.conciertoService.obtenerConciertos().subscribe({
      next: (conciertos) => {
        this.conciertos = conciertos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar conciertos:', err);
        this.cargando = false;
      }
    });
  }

  /**
   * Navega al detalle del concierto
   * REQUISITO: Rutas básicas entre vistas
   */
  irADetalle(id: number): void {
    this.router.navigate(['/concierto', id]);
  }

}
