import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionConciertoComponent } from './informacion-concierto.component';

describe('InformacionConciertoComponent', () => {
  let component: InformacionConciertoComponent;
  let fixture: ComponentFixture<InformacionConciertoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionConciertoComponent]
    });
    fixture = TestBed.createComponent(InformacionConciertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
