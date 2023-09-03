import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api/api.service';
import { CrudComponent } from './pages/crud/crud.component';
import { CrudEditComponent } from './pages/crud/crud-edit/crud-edit.component';
import { CrudAddComponent } from './pages/crud/crud-add/crud-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonComponent,
    HomeComponent,
    HeaderComponent,
    CrudComponent,
    CrudEditComponent,
    CrudAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
