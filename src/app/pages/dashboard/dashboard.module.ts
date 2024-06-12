import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { PagesRoutes } from "../pages.routing.module";
import { DashboardComponent } from "./dashboard.component";
import { CardPersonalComponent } from "./dashboard-components/cardPersonal/cardPersonal.component";
import { SalesOverviewChartComponent } from "./dashboard-components/salesOverviewChart/salesOverviewChart.component";
import { CardsComponent } from "./dashboard-components/cards/cards.component";
import { RutinaInfoComponent } from "./dashboard-components/rutinaInfo/ejercicioInfo.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
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
    DashboardComponent,
    CardsComponent,
    SalesOverviewChartComponent,
    CardPersonalComponent,
    RutinaInfoComponent
  ],
})

export class DashboardModule {}
