import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { CardsComponent } from "./pierna-components/cards/cards.component";
import { PiernaComponent } from "./pierna.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { Search_barComponent } from "./pierna-components/search_bar/search_bar.component";
import { EjercicioInfoComponent } from "./pierna-components/ejercicioInfo/ejercicioInfo.component";
import { EjerciciosService } from "src/app/services/ejercicios/ejercicios.service";
import { AppComponent } from "src/app/app.component";
import { EjercicioAddRutinaComponent } from "./pierna-components/ejercicioAddRutina/ejercicioAddRutina.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Pierna",
      urls: [{ title: "Pierna", url: "/pierna" }, { title: "Pierna" }],
    },
    component: PiernaComponent,
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
    PiernaComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent,
    EjercicioAddRutinaComponent
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})

export class PiernaModule {}








