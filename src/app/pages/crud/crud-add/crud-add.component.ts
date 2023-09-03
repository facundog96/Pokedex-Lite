import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonMockService } from 'src/app/services/api/pokemon-mock.service';
import { newPokemonAdd } from 'src/app/shared/interfaces/pokemon';

@Component({
  selector: 'app-crud-add',
  templateUrl: './crud-add.component.html',
  styleUrls: ['./crud-add.component.css'],
})
export class CrudAddComponent {
  newPokemon: newPokemonAdd = {
    id: 0,
    name: '',
    type: [],
    evolution: [],
    image: '',
  };

  isImageUrlValid: boolean = true;
  constructor(
    private router: Router,
    private pokemonService: PokemonMockService
  ) {}

  createPokemon() {
    this.validateImageUrl();
    if (!this.isImageUrlValid) {
      alert('Ingrese una URL válida.');
      return;
    }

    this.pokemonService.addPokemon({
      name: this.newPokemon.name,
      type: this.newPokemon.type,
      evolution: this.newPokemon.evolution,
      id: 0,
      abilities: [],
      image: this.newPokemon.image,
      lvl: 0,
    });
    this.router.navigate(['/crud']);
  }

  goBack(): void {
    this.router.navigateByUrl('/crud');
  }
  validateImageUrl() {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    this.isImageUrlValid = urlPattern.test(this.newPokemon.image);
  }
}
