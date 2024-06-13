import { Component, OnInit } from '@angular/core';
import { SalesOverviewChart, salesOverviewChartData } from './salesOverviewChart-data';
import { EstadisticasUsuario } from 'src/app/models/estadisticasUsuario.model';
import { EstadisticasUsuarioService } from 'src/app/services/estadisticasUsuario/estadisticasUsuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription } from 'rxjs';
import { CardObserverService } from 'src/app/services/cardObserver/cardObserver.service';

@Component({
  selector: 'app-sales-overview-chart',
  templateUrl: './salesOverviewChart.component.html'
})
export class SalesOverviewChartComponent implements OnInit {
  
  salesOverviewChart: Partial<SalesOverviewChart> | any;
  estadisticas: EstadisticasUsuario[];
  usuario?: Usuario;
  private subscription: Subscription;

  constructor(
    private estadisticasUsu: EstadisticasUsuarioService,
    private cookieService: CookieService,
    private cardObservableService: CardObserverService,
  ) { 

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
    this.getEstadisticas(); 

    this.subscription = this.cardObservableService.data$.subscribe(estadisticas=>{
          this.estadisticas = estadisticas // Información enviada por el componente padre al ser actuializado mediante el servicio de tipo observable
          this.getEstadisticas()
        })
  }
  
updateChart(): void {
  if (this.estadisticas) {
    const masaMuscular = this.estadisticas.map(est => est.masaMuscular ?? 0);
    const grasa = this.estadisticas.map(est => est.grasa ?? 0);
    console.log("risas 1")
        
    /*const fechas = this.estadisticas.map(est => {
      if (est.fecha) {
        const date = new Date(est.fecha);
        // Formatear la fecha en el formato deseado
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        console.log(formattedDate)
        return formattedDate;

      } else {
        return 'Fecha desconocida';
      }
    }); */

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

    this.salesOverviewChart.xaxis.categories =['05/06/2024','05/06/2024', '05/06/2024' ,'05/06/2024', '05/06/2024', '05/06/2024' ,'05/06/2024'];
  }
}

}