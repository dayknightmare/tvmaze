import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'detalhes/:id', loadChildren: './pages/detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'temporada/:id', loadChildren: './pages/temporada/temporada.module#TemporadaPageModule' },
  { path: 'episodios/:id', loadChildren: './pages/episodios/episodios.module#EpisodiosPageModule' },
  { path: 'episodio/:id', loadChildren: './pages/episodio/episodio.module#EpisodioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
