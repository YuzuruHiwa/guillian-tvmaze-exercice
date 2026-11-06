import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ShowDetail } from './show-detail';

describe('ShowDetail', () => {
  let component: ShowDetail;
  let fixture: ComponentFixture<ShowDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDetail],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
