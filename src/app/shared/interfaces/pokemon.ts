export interface Pokemon {
  abilities: string[];
  evolution: string[];
  id: number;
  image: string;
  lvl: number;
  name: string;
  type: string[];
}

export interface newPokemonAdd {
  evolution: string[];
  id: number;
  name: string;
  type: string[];
  image: string;
}
