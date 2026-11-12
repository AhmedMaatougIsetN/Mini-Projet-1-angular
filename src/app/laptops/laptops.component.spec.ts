import { ComponentFixture, TestBed } from '@angular/core/testing';

import { laptopsComponent } from './laptops.component';

describe('laptopsComponent', () => {
  let component: laptopsComponent;
  let fixture: ComponentFixture<laptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [laptopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(laptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
