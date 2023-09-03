import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';
import { CrudEditComponent } from './pages/crud/crud-edit/crud-edit.component';
import { AuthGuard } from './auth/guard.guard';
import { CrudAddComponent } from './pages/crud/crud-add/crud-add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
    canActivate: [AuthGuard],
  },
  { path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
  {
    path: 'crud/edit/:id',
    component: CrudEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crud/add/:id',
    component: CrudAddComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
