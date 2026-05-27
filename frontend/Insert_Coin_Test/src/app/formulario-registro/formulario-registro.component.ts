import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Concert, ConciertoService } from '../services/concierto.service';

@Component({
    selector: 'app-formulario-registro',
    templateUrl: './formulario-registro.component.html',
    styleUrls: ['./formulario-registro.component.sass'],
    standalone: false
})
export class FormularioRegistroComponent implements OnInit {

  conciertos = signal<Concert[]>([]);
  cargando = signal(true);
  guardando = signal(false);
  enviado = signal(false);
  registroExitoso = signal(false);
  error = signal('');

  formulario = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    ticketsPurchased: [1, [Validators.required, Validators.min(1)]],
    concertId: [null as number | null, Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly conciertoService: ConciertoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.cargarConciertos();

    const concertId = Number(this.route.snapshot.queryParamMap.get('concertId'));
    if (concertId) {
      this.formulario.patchValue({ concertId });
    }
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
        this.error.set('No se han podido cargar los conciertos desde el backend.');
        this.cargando.set(false);
      }
    });
  }

  tieneError(nombreCampo: string): boolean {
    const control = this.formulario.get(nombreCampo);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  obtenerMensajeError(nombreCampo: string): string {
    const control = this.formulario.get(nombreCampo);
    if (!control) {
      return '';
    }

    if (control.hasError('required')) {
      return 'Campo obligatorio.';
    }

    if (control.hasError('minlength')) {
      return `Debe tener al menos ${control.getError('minlength').requiredLength} caracteres.`;
    }

    if (control.hasError('email')) {
      return 'Introduce un email valido.';
    }

    if (control.hasError('min')) {
      return 'Debe ser mayor que cero.';
    }

    return '';
  }

  enviarFormulario(): void {
    this.enviado.set(true);
    this.registroExitoso.set(false);
    this.error.set('');

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const raw = this.formulario.getRawValue();
    this.guardando.set(true);

    this.conciertoService.crearAsistente({
      firstName: raw.firstName ?? '',
      lastName: raw.lastName ?? '',
      email: raw.email ?? '',
      ticketsPurchased: Number(raw.ticketsPurchased),
      concertId: Number(raw.concertId)
    }).subscribe({
      next: () => {
        this.guardando.set(false);
        this.registroExitoso.set(true);
        const concertId = Number(raw.concertId);
        this.formulario.reset({ ticketsPurchased: 1, concertId });
      },
      error: () => {
        this.guardando.set(false);
        this.error.set('No se ha podido crear el asistente. Revisa los datos o prueba con otro email.');
      }
    });
  }

  limpiarFormulario(): void {
    this.formulario.reset({ ticketsPurchased: 1 });
    this.enviado.set(false);
    this.registroExitoso.set(false);
    this.error.set('');
  }

  verDetalle(): void {
    const id = this.formulario.get('concertId')?.value;
    if (id) {
      this.router.navigate(['/concierto', id]);
    }
  }
}
