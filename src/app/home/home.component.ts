import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Interfaz para definir la estructura de un testimonio
interface Testimonio {
  texto: string;
  autor: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Índice actual para mostrar el testimonio activo
  currentIndex = 0;

  // Lista de testimonios que se mostrarán en el componente
  testimonios: Testimonio[] = [
    {
      texto: 'Los productos personalizados superaron mis expectativas. La calidad es excelente y el proceso fue muy sencillo.',
      autor: 'María Gómez'
    },
    {
      texto: 'Increíble atención al detalle en mis diseños personalizados. Todos preguntan dónde los conseguí.',
      autor: 'Carlos Rodríguez'
    },
    {
      texto: 'Rápido tiempo de entrega y perfecta calidad. Definitivamente volveré a ordenar más productos personalizados.',
      autor: 'Ana Martínez'
    },
    {
      texto: 'La personalización fue exactamente como la imaginé. El equipo entendió perfectamente mi visión.',
      autor: 'David Fernández'
    }
  ];

  // Formulario reactivo para la sección de contacto
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario con validaciones
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required], // Campo obligatorio
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Campo obligatorio y solo números
      correo: ['', [Validators.required, Validators.email]], // Campo obligatorio y debe ser un correo válido
      aceptaPolitica: [false, Validators.requiredTrue] // Campo obligatorio y debe ser verdadero
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.contactForm.valid) {
      this.enviarCorreo(); // Llama al método para enviar el correo
    } else {
      alert('Por favor, completa todos los campos correctamente.'); // Muestra un mensaje de error
    }
  }

  // Método para simular el envío del correo
  enviarCorreo() {
    alert('El correo fue enviado correctamente');
    // Aquí puedes agregar también la lógica para enviar el formulario
  }

  // Método para mostrar el testimonio anterior
  prevTestimonio() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
  }

  // Método para mostrar el siguiente testimonio
  nextTestimonio() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
  }

}
