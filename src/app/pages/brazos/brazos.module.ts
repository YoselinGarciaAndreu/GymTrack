import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { CardsComponent } from "./brazos-components/cards/cards.component";
import { BrazosComponent } from "./brazos.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { Search_barComponent } from "./brazos-components/search_bar/search_bar.component";
import { EjercicioInfoComponent } from "./brazos-components/ejercicioInfo/ejercicioInfo.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { EjerciciosService } from "src/app/services/ejercicios/ejercicios.service";
import { AppComponent } from "src/app/app.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Brazos",
      urls: [{ title: "Brazos", url: "/brazos" }, { title: "Brazos" }],
    },
    component: BrazosComponent,
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
    BrazosComponent,
    CardsComponent,
    Search_barComponent,
    EjercicioInfoComponent
  ],


  providers: [EjerciciosService],
  bootstrap: [AppComponent]
})
//RUTA COMPRAS
export class BrazosModule {}
