import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { CardsComponent } from "./cardio-components/cards/cards.component";
import { CardioComponent } from "./cardio.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { Search_barComponent } from "./cardio-components/search_bar/search_bar.component";
import { EjercicioInfoComponent } from "./cardio-components/ejercicioInfo/ejercicioInfo.component";
import { EjerciciosService } from "src/app/services/ejercicios/ejercicios.service";
import { AppComponent } from "src/app/app.component";
import { EjercicioAddRutinaComponent } from "./cardio-components/ejercicioAddRutina/ejercicioAddRutina.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Cardio",
      urls: [{ title: "Cardio", url: "/cardio" }, { title: "Cardio" }],
    },
    component: CardioComponent,
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
    CardioComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent,
    EjercicioAddRutinaComponent
  ],

  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})

export class CardioModule {}








