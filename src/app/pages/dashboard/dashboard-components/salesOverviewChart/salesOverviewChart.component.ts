import { Component, OnInit } from '@angular/core';
import { SalesOverviewChart, salesOverviewChartData } from './salesOverviewChart-data';
import { EstadisticasUsuario } from 'src/app/models/estadisticasUsuario.model';
import { EstadisticasUsuarioService } from 'src/app/services/estadisticasUsuario/estadisticasUsuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sales-overview-chart',
  templateUrl: './salesOverviewChart.component.html'
})
export class SalesOverviewChartComponent implements OnInit {
  
  salesOverviewChart: Partial<SalesOverviewChart> | any;
  estadisticas: EstadisticasUsuario[];
  usuario?: Usuario;

  constructor(
    private estadisticasUsu: EstadisticasUsuarioService,
    private cookieService: CookieService) { 

    this.salesOverviewChart = salesOverviewChartData;

    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }
  }
  getEstadisticas(): void {
    if (this.usuario && this.usuario.dni) {
      this.estadisticasUsu.getUltimasEstadisticas(this.usuario.dni).subscribe({
        next: (data) => {
          this.estadisticas = data.reverse();
          // Llamar a updateChart después de obtener las estadísticas
          this.updateChart();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  
  ngOnInit(): void {
    this.getEstadisticas(); // Llamar a getEstadisticas() en el ngOnInit
  }
  
updateChart(): void {
  if (this.estadisticas) {
    const masaMuscular = this.estadisticas.map(est => est.masaMuscular ?? 0);
    const grasa = this.estadisticas.map(est => est.grasa ?? 0);
    const fechas = this.estadisticas.map(est => {
      if (est.fecha) {
        const date = new Date(est.fecha);
        // Formatear la fecha en el formato deseado
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;

      } else {
        return 'Fecha desconocida';
      }
    });

    this.salesOverviewChart.series = [
      {
        name: 'Masa muscular',
        data: masaMuscular,
        color: '#f76672',
      },
      {
        name: 'Grasa corporal',
        data: grasa,
        color: '#fa896b',
      },
    ];

    this.salesOverviewChart.xaxis.categories = fechas;
  }
}

}