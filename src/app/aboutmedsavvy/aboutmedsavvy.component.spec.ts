import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmedsavvyComponent } from './aboutmedsavvy.component';

describe('AboutmedsavvyComponent', () => {
  let component: AboutmedsavvyComponent;
  let fixture: ComponentFixture<AboutmedsavvyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmedsavvyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmedsavvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
