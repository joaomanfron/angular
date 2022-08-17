import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatosComponent } from './pages/campeonatos/campeonatos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'login',component:LoginComponent},
  {path:'campeonatos',component:CampeonatosComponent},
  {path:'resultados',component:ResultadosComponent},
  {path:'contact',component:ContactComponent},
  {path:'noticias',component:NoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
