import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroRegiaoComponent } from './macro-regiao.component';

describe('MacroRegiaoComponent', () => {
  let component: MacroRegiaoComponent;
  let fixture: ComponentFixture<MacroRegiaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacroRegiaoComponent]
    });
    fixture = TestBed.createComponent(MacroRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
