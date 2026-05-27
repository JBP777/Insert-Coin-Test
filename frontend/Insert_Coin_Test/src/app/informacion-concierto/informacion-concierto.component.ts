import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConciertoService, Concierto } from '../services/concierto.service';

@Component({
  selector: 'app-informacion-concierto',
  templateUrl: './informacion-concierto.component.html',
  styleUrls: ['./informacion-concierto.component.sass']
})
export class InformacionConciertoComponent implements OnInit {

  concierto: Concierto | undefined;
  cargando = true;
  error = false;

  constructor(
    private readonly conciertoService: ConciertoService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    // Obtener ID desde los parámetros de ruta
    // REQUISITO: Rutas básicas entre vistas
    this.activatedRoute.params.subscribe(params => {
      const id = Number(params['id']);
      if (id) {
        this.cargarDetalle(id);
      } else {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  /**
   * Carga los detalles del concierto por ID
   * REQUISITO: Observables en servicios
   */
  cargarDetalle(id: number): void {
    this.conciertoService.obtenerConciertoById(id).subscribe({
      next: (concierto) => {
        if (concierto) {
          this.concierto = concierto;
        } else {
          this.error = true;
        }
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar concierto:', err);
        this.error = true;
        this.cargando = false;
      }
    });
  }

  /**
   * Regresa a la selección de conciertos
   */
  volverAtras(): void {
    this.router.navigate(['/conciertos']);
  }

}
