import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervuaroSkaiciuokleComponent } from './rezervuaro-skaiciuokle.component';

describe('RezervuaroSkaiciuokleComponent', () => {
  let component: RezervuaroSkaiciuokleComponent;
  let fixture: ComponentFixture<RezervuaroSkaiciuokleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervuaroSkaiciuokleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervuaroSkaiciuokleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
