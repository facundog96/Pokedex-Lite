import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/interfaces/pokemon';
import { PokemonMockService } from 'src/app/services/api/pokemon-mock.service';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css'],
})
export class CrudEditComponent implements OnInit {
  pokemonId: number = 0;
  pokemon = {} as Pokemon;
  editedPokemon = {} as Pokemon;
  newType: string = '';
  newEvolution: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonMockService
  ) {}

  goBack(): void {
    this.router.navigateByUrl('/crud');
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.pokemonId = +idParam;
    }

    this.pokemon = this.pokemonService.getPokemonById(this.pokemonId);

    if (!this.pokemon) {
      this.router.navigate(['/crud']);
    } else {
      this.editedPokemon = { ...this.pokemon };

      if (!this.editedPokemon.type) {
        this.editedPokemon.type = [];
      }
      if (!this.editedPokemon.evolution) {
        this.editedPokemon.evolution = [];
      }
    }
  }

  addType(): void {
    this.editedPokemon.type.push('');
  }

  removeType(index: number): void {
    this.editedPokemon.type.splice(index, 1);
  }

  addEvolution(): void {
    this.editedPokemon.evolution.push('');
  }

  removeEvolution(index: number): void {
    this.editedPokemon.evolution.splice(index, 1);
  }

  deletePokemon(): void {
    if (this.pokemonId !== undefined) {
      this.pokemonService.deletePokemon(this.pokemonId);
    }

    this.router.navigate(['/crud']);
  }

  savePokemon() {
    this.pokemonService.updatePokemon(this.editedPokemon).subscribe(() => {
      this.router.navigate(['/crud/edit/', this.editedPokemon.id]);
    });
  }
}
