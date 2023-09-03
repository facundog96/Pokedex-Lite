import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { ApiService } from 'src/app/services/api/api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any = {};

  userLogged: boolean = false;
  pokemonList: any[] = [];
  constructor(
    private loginService: LoginService,
    private ApiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLogged.subscribe({
      next: (userLogged) => (this.userLogged = userLogged),
    });
    this.searchData();
  }

  getTypeNames(types: any[]): string {
    return types.map((type: any) => type.type.name).join(', ');
  }

  searchData() {
    this.ApiService.getData().subscribe((data: any) => {
      if (data.results) {
        const pokemonsUrl = data.results.map((pokemon: any) => pokemon.url);

        // Mapear las URL en observables y luego combinarlos con forkJoin
        const requests = pokemonsUrl.map((url: string) =>
          this.ApiService.getPokemonByUrl(url)
        );

        forkJoin(requests).subscribe((pokemonData: any) => {
          // pokemonData será un arreglo con los datos de todos los Pokémon
          this.pokemonList = pokemonData;
          console.log(this.pokemonList);
        });
      }
    });
  }
}
