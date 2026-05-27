import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConciertoComponent } from './registro-concierto.component';

describe('RegistroConciertoComponent', () => {
  let component: RegistroConciertoComponent;
  let fixture: ComponentFixture<RegistroConciertoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroConciertoComponent]
    });
    fixture = TestBed.createComponent(RegistroConciertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
