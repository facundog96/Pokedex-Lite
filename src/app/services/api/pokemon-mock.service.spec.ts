import { TestBed } from '@angular/core/testing';

import { PokemonMockService } from './pokemon-mock.service';

describe('PokemonMockService', () => {
  let service: PokemonMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
