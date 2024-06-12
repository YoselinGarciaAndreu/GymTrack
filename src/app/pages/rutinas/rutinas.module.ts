import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { CardsComponent } from "./rutinas-components/cards/cards.component";
import { RutinasComponent } from "./rutinas.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { Search_barComponent } from "./rutinas-components/search_bar/search_bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { EjerciciosService } from "src/app/services/ejercicios/ejercicios.service";
import { AppComponent } from "src/app/app.component";
import { RutinaInfoComponent } from "./rutinas-components/rutinaInfo/ejercicioInfo.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Rutinas",
      urls: [{ title: "Rutinas", url: "/rutinas" }, { title: "Rutinas" }],
    },
    component: RutinasComponent,
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
    // BrowserModule,
    // HttpClientModule,
    RutinasComponent,
    CardsComponent,
    Search_barComponent,
    RutinaInfoComponent
  ],


  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
//RUTA COMPRAS
export class RutinasModule {}
