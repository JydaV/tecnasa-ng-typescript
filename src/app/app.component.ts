import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tecnasa-ng-ts';

  public formularioPersona: FormGroup = this.fb.group({});

  public personas: Array<Persona> = [];
  
  constructor(
    private fb: FormBuilder  
  ) {
    this.formularioPersona = this.crearFormulariPersona();
  }

  crearFormulariPersona() {
    return this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      edad: [null, [Validators.required]],
    });
  }

  public agregarPersona() {

    const persona: Persona = this.formularioPersona.value;

    this.personas.push(persona);

  }
  
  public eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
