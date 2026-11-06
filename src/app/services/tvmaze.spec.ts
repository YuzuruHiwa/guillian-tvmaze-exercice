import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Tvmaze } from './tvmaze';

describe('Tvmaze', () => {
  let service: Tvmaze;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(Tvmaze);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
