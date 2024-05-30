import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { ProgresoFisicoComponent } from "./progresoFisico.component";
import { CardsComponent } from "./progresoFisico-components/cards/cards.component";
import { Search_barComponent } from "./progresoFisico-components/search_bar/search_bar.component";
import { SalesOverviewChartComponent } from "./progresoFisico-components/salesOverviewChart/salesOverviewChart.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "ProgresoFisico",
      urls: [{ title: "ProgresoFisico", url: "/progresoFisico" }, { title: "ProgresoFisico" }],
    },
    component: ProgresoFisicoComponent,
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
    ProgresoFisicoComponent,
    CardsComponent,
    Search_barComponent,
    SalesOverviewChartComponent
  ],
})
//RUTA COMPRAS
export class ProgresoFisicoModule {}
