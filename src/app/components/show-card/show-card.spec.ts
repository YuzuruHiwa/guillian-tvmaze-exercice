import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ShowCard } from './show-card';

describe('ShowCard', () => {
  let component: ShowCard;
  let fixture: ComponentFixture<ShowCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCard);
    fixture.componentRef.setInput('show', {
      id: 1,
      name: 'Test show',
      image: null,
      summary: null,
      status: 'Running',
      genres: [],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
