import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonMockService } from 'src/app/services/api/pokemon-mock.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(
    private pokemonService: PokemonMockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getAllPokemon();
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  addPokemon(newPokemon: any): void {
    this.pokemonService.addPokemon(newPokemon);
    this.pokemonList = this.pokemonService.getAllPokemon();
  }

  updatePokemon(updatedPokemon: any): void {
    this.pokemonService.updatePokemon(updatedPokemon);
    this.pokemonList = this.pokemonService.getAllPokemon();
  }

  deletePokemon(id: number): void {
    this.pokemonService.deletePokemon(id);
    this.pokemonList = this.pokemonService.getAllPokemon();
  }

  goToAddPokemonPage() {
    const newId = Date.now().toString();
    this.router.navigateByUrl(`/crud/add/${newId}`);
  }
}
