import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { EjercicioGuardadoComponent } from "./ejercicios-personales.component";
import { Search_barComponent } from "./ejercicios-personales-components/search_bar/search_bar.component";
import { EjercicioInfoComponent } from "./ejercicios-personales-components/ejercicioInfo/ejercicioInfo.component";
import { CrearEjercicioComponent } from "./ejercicios-personales-components/crearEjercicio/crearEjercicio.component";
import { CardsComponent } from "./ejercicios-personales-components/cards/cards.component";
import { CardUserComponent } from "./ejercicios-personales-components/cardUser/cardUser.component";




const routes: Routes = [
  {
    path: "",
    data: {
      title: "EjercicioGuardado",
      urls: [{ title: "EjercicioGuardado", url: "/ejercicioGuardado" }, { title: "EjercicioGuardado" }],
    },
    component: EjercicioGuardadoComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    TablerIconsModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
  ],
  declarations: [
    EjercicioGuardadoComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent,
    CrearEjercicioComponent,
    CardUserComponent,

  ],
})
//RUTA COMPRAS
export class EjercicioGuardadoModule {}
