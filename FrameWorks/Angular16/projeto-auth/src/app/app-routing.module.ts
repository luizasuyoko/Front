import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InternaComponent } from './componentes/interna/interna.component';
import { AuthGuard } from './guardas/auth.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  //interceptação da rota pelo AuthGuard
  {path: "interna", component: InternaComponent, canActivate:[AuthGuard]},
  //type in a blank and go back to home
  {path: "", redirectTo: "home"},
  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
