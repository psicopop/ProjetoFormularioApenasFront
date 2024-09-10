import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FormularioComponent } from './app/pages/formulario/formulario.component';
import { VisualizacaoComponent } from './app/pages/visualizacao/visualizacao.component';
import { ListagemComponent } from './app/pages/listagem/listagem.component';

const routes: Route[] = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'visualizacao', component: VisualizacaoComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: '**', redirectTo: '/formulario' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
