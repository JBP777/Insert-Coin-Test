import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendee, Concert, ConciertoService } from '../services/concierto.service';

@Component({
    selector: 'app-informacion-concierto',
    templateUrl: './informacion-concierto.component.html',
    styleUrls: ['./informacion-concierto.component.sass'],
    standalone: false
})
export class InformacionConciertoComponent implements OnInit {

  concierto = signal<Concert | null>(null);
  asistentes = signal<Attendee[]>([]);
  cargando = signal(true);
  cargandoAsistentes = signal(false);
  error = signal('');

  constructor(
    private readonly conciertoService: ConciertoService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = Number(params['id']);
      if (id) {
        this.cargarDetalle(id);
        this.cargarAsistentes(id);
      } else {
        this.error.set('Identificador de concierto no valido.');
        this.cargando.set(false);
      }
    });
  }

  cargarDetalle(id: number): void {
    this.cargando.set(true);
    this.error.set('');

    this.conciertoService.obtenerConciertoById(id).subscribe({
      next: (concierto) => {
        this.concierto.set(concierto);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se ha podido cargar el concierto solicitado.');
        this.cargando.set(false);
      }
    });
  }

  cargarAsistentes(id: number): void {
    this.cargandoAsistentes.set(true);

    this.conciertoService.obtenerAsistentesPorConcierto(id).subscribe({
      next: (asistentes) => {
        this.asistentes.set(asistentes);
        this.cargandoAsistentes.set(false);
      },
      error: () => {
        this.cargandoAsistentes.set(false);
      }
    });
  }

  volverAtras(): void {
    this.router.navigate(['/conciertos']);
  }

  comprarEntrada(): void {
    const id = this.concierto()?.id;
    if (id) {
      this.router.navigate(['/registro'], { queryParams: { concertId: id } });
    }
  }

  fechaCorta(fecha: string): string {
    return new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'full',
      timeStyle: 'short'
    }).format(new Date(fecha));
  }
}
