import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentCardComponent } from './subcomponent-card.component';

describe('SubcomponentCardComponent', () => {
  let component: SubcomponentCardComponent;
  let fixture: ComponentFixture<SubcomponentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcomponentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcomponentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
