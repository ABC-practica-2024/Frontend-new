import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipaComponent } from './echipa.component';

describe('EchipaComponent', () => {
  let component: EchipaComponent;
  let fixture: ComponentFixture<EchipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchipaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
