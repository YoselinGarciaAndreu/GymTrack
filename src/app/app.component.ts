import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {EjerciciosService} from './services/ejercicios/ejercicios.service'
import {UsuariosService} from './services/usuarios/usuarios.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // title = 'Modernize Angular Admin Tempplate';

  // ejerciciosForm: FormGroup;

  // constructor(public fb: FormBuilder, 
  //   public ejerciciosService: EjerciciosService,
  //   public usuariosService: UsuariosService
  // ){
    
  // }

  ngOnInit(): void {

    // this.ejerciciosForm = this.fb.group({})


  }
}
