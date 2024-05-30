import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },



//RUTA PIERNA
      {
        path: 'pierna',
        loadChildren: () =>
          import('./pages/pierna/pierna.module').then((m) => m.PiernaModule),
      },

      {
        path: 'torso',
        loadChildren: () =>
          import('./pages/torso/torso.module').then((m) => m.TorsoModule),
      },

      {
        path: 'espalda',
        loadChildren: () =>
          import('./pages/espalda/espalda.module').then((m) => m.EspaldaModule),
      },

      {
        path: 'cardio',
        loadChildren: () =>
          import('./pages/cardio/cardio.module').then((m) => m.CardioModule),
      },

      {
        path: 'brazos',
        loadChildren: () =>
          import('./pages/brazos/brazos.module').then((m) => m.BrazosModule),
      },


      {
        path: 'progreso_fisico',
        loadChildren: () =>
          import('./pages/progresoFisico/progresoFisico.module').then((m) => m.ProgresoFisicoModule),
      },
      
      {
        path: 'rutinas_guardadas',
        loadChildren: () =>
          import('./pages/rutinas-personales/rutinas-personales.module').then((m) => m.RutinaGuardadaModule),
      },
      {
        path: 'ejercicios_guardados',
        loadChildren: () =>
          import('./pages/ejercicios-personales/ejercicios-personales.module').then((m) => m.EjercicioGuardadoModule),
      },
    
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
