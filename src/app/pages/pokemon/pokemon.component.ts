import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  evolutions: any[] = [];
  pokemon: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  getTypeNames(types: any[]): string {
    if (types && types.length > 0) {
      return types.map((type: any) => type.type.name).join(', ');
    }
    return '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const pokemonId = +params['id'];

      this.apiService.getPokemonById(pokemonId).subscribe((data) => {
        this.pokemon = data;

        this.apiService
          .getPokemonSpeciesByUrl(this.pokemon.species.url)
          .subscribe((speciesData) => {
            const evolutionChainUrl = speciesData.evolution_chain.url;

            this.apiService
              .getEvolutionChainByUrl(evolutionChainUrl)
              .subscribe((evolutionData) => {
                this.evolutions = this.getAllEvolutions(evolutionData.chain);
              });
          });
      });
    });
  }

  getAllEvolutions(chain: any): any[] {
    const evolutions = [];

    if (chain.species && chain.species.name !== this.pokemon.name) {
      evolutions.push(chain.species);
    }

    if (chain.evolves_to && chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution: any) => {
        const subEvolutions = this.getAllEvolutions(evolution);
        evolutions.push(...subEvolutions);
      });
    }

    return evolutions;
  }
}
