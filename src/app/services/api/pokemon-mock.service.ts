import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Pokemon } from 'src/app/shared/interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonMockService {
  private pokemonList: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      type: ['Grass'],
      evolution: ['Ivysaur', 'Venusaur'],
      abilities: ['Overgrow', 'Chlorophyll'],
      lvl: 64,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    },
    {
      id: 2,
      name: 'Charmander',
      type: ['Fire'],
      evolution: ['Charmeleon', 'Charizard'],
      abilities: ['Blaze', 'Solar Power'],
      lvl: 62,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    },
    {
      id: 3,
      name: 'Squirtle',
      type: ['Water'],
      evolution: ['Wartortle', 'Blastoise'],
      abilities: ['Torrent', 'Rain Dish'],
      lvl: 63,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    },
    {
      id: 4,
      name: 'Caterpie',
      type: ['Bug'],
      evolution: ['Metapod', 'Butterfree'],
      abilities: ['Shield Dust', 'Run Away'],
      lvl: 39,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    },
    {
      id: 5,
      name: 'Weedle',
      type: ['Bug'],
      evolution: ['Kakuna', 'Beedrill'],
      abilities: ['Shield Dust', 'Run Away'],
      lvl: 39,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    },
    {
      id: 6,
      name: 'Pidgey',
      type: ['Normal'],
      evolution: ['Pidgeotto'],
      abilities: ['Keen Eye', 'Tangled Feet'],
      lvl: 50,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    },
  ];

  updatePokemonList(updatedPokemon: Pokemon): void {
    const index = this.pokemonList.findIndex(
      (pokemon) => pokemon.id === updatedPokemon.id
    );
    if (index !== -1) {
      this.pokemonList[index] = updatedPokemon;
    }
  }

  constructor() {}

  getAllPokemon(): any[] {
    return this.pokemonList;
  }

  getPokemonById(id: number): any {
    return this.pokemonList.find((pokemon) => pokemon.id === id);
  }

  private getNextPokemonId(): number {
    const maxId = Math.max(...this.pokemonList.map((pokemon) => pokemon.id), 0);
    return maxId + 1;
  }

  addPokemon(newPokemon: Pokemon): void {
    newPokemon.id = this.getNextPokemonId();
    this.pokemonList.push(newPokemon);
  }

  updatePokemon(updatedPokemon: Pokemon): Observable<any> {
    const index = this.pokemonList.findIndex(
      (pokemon) => pokemon.id === updatedPokemon.id
    );
    if (index !== -1) {
      const updatedPokemonCopy = { ...updatedPokemon };
      updatedPokemonCopy.type = Array.isArray(updatedPokemonCopy.type)
        ? updatedPokemonCopy.type
        : [updatedPokemonCopy.type];
      this.pokemonList[index] = updatedPokemonCopy;
    }
    return of(null);
  }

  deletePokemon(id: number): void {
    const index = this.pokemonList.findIndex((pokemon) => pokemon.id === id);
    if (index !== -1) {
      this.pokemonList.splice(index, 1);
    }
  }
}
