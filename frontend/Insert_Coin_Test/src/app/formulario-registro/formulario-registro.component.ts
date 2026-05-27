import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interfaz para los conciertos
interface Concierto {
  id: number;
  nombre: string;
}

@Component({
    selector: 'app-formulario-registro',
    templateUrl: './formulario-registro.component.html',
    styleUrls: ['./formulario-registro.component.sass'],
    standalone: false
})
export class FormularioRegistroComponent implements OnInit {

  formulario!: FormGroup;
  enviado = signal(false);
  registroExitoso = signal(false);

  // Lista de conciertos disponibles
  conciertos: Concierto[] = [
    { id: 1, nombre: 'Concierto de Verano - Rock' },
    { id: 2, nombre: 'Festival Jazz 2024' },
    { id: 3, nombre: 'Clásicos en Vivo - Sinfónica' },
    { id: 4, nombre: 'Pop Stars Night' },
    { id: 5, nombre: 'Metal Fest 2024' }
  ];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  /**
   * Inicializa el formulario reactivo con validaciones
   * REQUISITO: Formularios reactivos
   */
  inicializarFormulario(): void {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      edad: ['', [Validators.required, Validators.min(13), Validators.max(120)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}[A-Z]$/)]],
      concierto: ['', Validators.required]
    });
  }

  /**
   * Obtiene un control del formulario para acceder a errores
   */
  obtenerControl(nombre: string) {
    return this.formulario.get(nombre);
  }

  /**
   * Valida si un campo tiene errores y fue tocado
   */
  tieneError(nombreCampo: string): boolean {
    const control = this.obtenerControl(nombreCampo);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  /**
   * Obtiene el mensaje de error apropiado para cada campo
   */
  obtenerMensajeError(nombreCampo: string): string {
    const control = this.obtenerControl(nombreCampo);

    if (!control) return '';

    if (control.hasError('required')) {
      return `${nombreCampo.charAt(0).toUpperCase() + nombreCampo.slice(1)} es requerido.`;
    }

    if (control.hasError('minLength')) {
      return `${nombreCampo} debe tener al menos ${control.getError('minLength').requiredLength} caracteres.`;
    }

    if (control.hasError('min')) {
      return `La edad mínima es ${control.getError('min').min} años.`;
    }

    if (control.hasError('max')) {
      return `La edad máxima es ${control.getError('max').max} años.`;
    }

    if (control.hasError('pattern')) {
      return 'DNI debe tener 8 dígitos y una letra (ej: 12345678A).';
    }

    return '';
  }

  /**
   * Maneja el envío del formulario
   * REQUISITO: Validación de datos del formulario
   */
  enviarFormulario(): void {
    this.enviado.set(true);

    if (this.formulario.valid) {
      const datosRegistro = this.formulario.value;
      console.log('Datos del registro:', datosRegistro);

      // Simular envío exitoso
      this.registroExitoso.set(true);

      // Limpiar formulario después de 2 segundos
      setTimeout(() => {
        this.formulario.reset();
        this.enviado.set(false);
        this.registroExitoso.set(false);
      }, 2000);
    } else {
      console.log('Formulario inválido. Revisa los campos.');
    }
  }

  /**
   * Reinicia el formulario
   */
  limpiarFormulario(): void {
    this.formulario.reset();
    this.enviado.set(false);
    this.registroExitoso.set(false);
  }

}
