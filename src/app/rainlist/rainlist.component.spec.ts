import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainlistComponent } from './rainlist.component';

describe('RainlistComponent', () => {
  let component: RainlistComponent;
  let fixture: ComponentFixture<RainlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
