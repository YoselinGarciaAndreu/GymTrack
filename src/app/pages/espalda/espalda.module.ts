import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { CardsComponent } from "./espalda-components/cards/cards.component";
import { EspaldaComponent } from "./espalda.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { Search_barComponent } from "./espalda-components/search_bar/search_bar.component";
import { EjercicioInfoComponent } from "./espalda-components/ejercicioInfo/ejercicioInfo.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { EjerciciosService } from "src/app/services/ejercicios/ejercicios.service";
import { AppComponent } from "src/app/app.component";
import { EjercicioAddRutinaComponent } from "./espalda-components/ejercicioAddRutina/ejercicioAddRutina.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Espalda",
      urls: [{ title: "Espalda", url: "/espalda" }, { title: "Espalda" }],
    },
    component: EspaldaComponent,
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
    EspaldaComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent,
    EjercicioAddRutinaComponent
  ],


  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
//RUTA COMPRAS
export class EspaldaModule {}
