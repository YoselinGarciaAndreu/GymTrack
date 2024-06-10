import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { CardsComponent } from "./torso-components/cards/cards.component";
import { TorsoComponent } from "./torso.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { Search_barComponent } from "./torso-components/search_bar/search_bar.component";
import { EjercicioInfoComponent } from "./torso-components/ejercicioInfo/ejercicioInfo.component";
import { EjerciciosService } from "src/app/services/ejercicios/ejercicios.service";
import { AppComponent } from "src/app/app.component";
import { EjercicioAddRutinaComponent } from "./torso-components/ejercicioAddRutina/ejercicioAddRutina.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Torso",
      urls: [{ title: "Torso", url: "/torso" }, { title: "Torso" }],
    },
    component: TorsoComponent,
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
    TorsoComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent,
    EjercicioAddRutinaComponent
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})

export class TorsoModule {}








