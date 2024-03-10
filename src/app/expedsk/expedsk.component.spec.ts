import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedskComponent } from './expedsk.component';

describe('ExpedskComponent', () => {
  let component: ExpedskComponent;
  let fixture: ComponentFixture<ExpedskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpedskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
