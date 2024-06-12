import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { RutinaGuardadaComponent } from "./rutinas-personales.component";
import { Search_barComponent } from "./rutinas-personales-components/search_bar/search_bar.component";
import { CrearRutinaComponent } from "./rutinas-personales-components/crearRutina/crearRutina.component";
import { EditarRutinaComponent } from "./rutinas-personales-components/editarRutina/editarRutina.component";
import { EjercicioInfoComponent } from "./rutinas-personales-components/ejercicioInfo/ejercicioInfo.component";
import { CardsComponent } from "./rutinas-personales-components/cards/cards.component";
import { CardsGuardadasComponent } from "./rutinas-personales-components/cardsGuardadas/cardsGuardadas.component";
import { RutinaInfoComponent } from "./rutinas-personales-components/rutinaInfo/ejercicioInfo.component";
import { CardUserComponent } from "./rutinas-personales-components/cardUser/cardUser.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "RutinaGuardada",
      urls: [{ title: "RutinaGuardada", url: "/rutinaGuardada" }, { title: "RutinaGuardada" }],
    },
    component: RutinaGuardadaComponent,
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
    RutinaGuardadaComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent,
    CrearRutinaComponent,
    EditarRutinaComponent,
    CardsGuardadasComponent,
    RutinaInfoComponent,
    CardUserComponent

  ],
})
//RUTA COMPRAS
export class RutinaGuardadaModule {}
