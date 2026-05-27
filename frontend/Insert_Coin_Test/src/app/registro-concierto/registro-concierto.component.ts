import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Concert, ConciertoService } from '../services/concierto.service';

@Component({
    selector: 'app-registro-concierto',
    templateUrl: './registro-concierto.component.html',
    styleUrls: ['./registro-concierto.component.sass'],
    standalone: false
})
export class RegistroConciertoComponent implements OnInit {

  conciertos = signal<Concert[]>([]);
  cargando = signal(true);
  guardando = signal(false);
  error = signal('');
  mensaje = signal('');
  formularioVisible = signal(false);

  conciertoForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    artist: ['', [Validators.required, Validators.minLength(2)]],
    venue: ['', [Validators.required, Validators.minLength(2)]],
    concertDate: ['', Validators.required],
    availableTickets: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(
    private readonly conciertoService: ConciertoService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cargarConciertos();
  }

  cargarConciertos(): void {
    this.cargando.set(true);
    this.error.set('');

    this.conciertoService.obtenerConciertos().subscribe({
      next: (conciertos) => {
        this.conciertos.set(conciertos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se han podido cargar los conciertos. Comprueba que el backend este arrancado en http://localhost:8080 y que CORS permita http://localhost:4200.');
        this.cargando.set(false);
      }
    });
  }

  crearConcierto(): void {
    this.mensaje.set('');
    this.error.set('');

    if (this.conciertoForm.invalid) {
      this.conciertoForm.markAllAsTouched();
      return;
    }

    const raw = this.conciertoForm.getRawValue();
    this.guardando.set(true);

    this.conciertoService.crearConcierto({
      name: raw.name ?? '',
      artist: raw.artist ?? '',
      venue: raw.venue ?? '',
      concertDate: raw.concertDate ?? '',
      availableTickets: Number(raw.availableTickets)
    }).subscribe({
      next: (concert) => {
        this.conciertos.update((current) => [...current, concert]);
        this.conciertoForm.reset({ availableTickets: 1 });
        this.formularioVisible.set(false);
        this.guardando.set(false);
        this.mensaje.set('Concierto creado correctamente.');
      },
      error: () => {
        this.guardando.set(false);
        this.error.set('No se ha podido crear el concierto. Revisa los datos y la conexion con el backend.');
      }
    });
  }

  tieneError(campo: string): boolean {
    const control = this.conciertoForm.get(campo);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  irADetalle(id: number): void {
    this.router.navigate(['/concierto', id]);
  }

  fechaCorta(fecha: string): string {
    return new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(fecha));
  }
}
