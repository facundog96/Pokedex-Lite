import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  public getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public getPokemonById(pokemonId: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    return this.http.get<any>(url);
  }

  public getPokemonSpeciesByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public getEvolutionChainByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
