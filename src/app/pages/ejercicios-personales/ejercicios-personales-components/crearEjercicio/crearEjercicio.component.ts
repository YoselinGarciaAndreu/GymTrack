import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-crear-ejercicio',
  templateUrl: './crearEjercicio.component.html'
})


export class CrearEjercicioComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
  usuario={
    dni : "03161512R",
    nombreUsuario: "Yoselin" ,
    nombreApellidos: "Jose Luis Garcia Andreu", 
    correo :"jocefuo@gmail.com",
    edad :19,
    peso :64,
    masaMuscular :28,
    grasaCorporal :21,
  }

  ejercicioComponent={

  descripcion: "",
  nombre: "",
  tipo: "",
  likes: 0,
  disLikes: 0,
  dni: this.usuario , 
  }
  constructor(private ejerciciosService: EjerciciosService) {}

  saveEjercicio(){

    console.log(this.ejercicioComponent)

    // var ejercicio: Ejercicio = {
    //   id_ejercicio: 4,
    //   descripcion: this.descripcion,
    //   nombre: this.nombre,
    //   tipo: this.tipo,
    //   likes: 0,
    //   disLikes: 0,
    //   dni: '03161512R' 
    // }

   
    
    this.ejerciciosService.saveEjercicio(this.ejercicioComponent).subscribe({


      next: (data) => {
        console.log("Ejercicio creado");
      },
      error: (error) => {
        console.log(error);
      },
    });

  }
  
  closeModal() {
    this.close.emit();
  }
}