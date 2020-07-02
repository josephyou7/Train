import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2googleChartComponent } from './ng2google-chart.component';

describe('Ng2googleChartComponent', () => {
  let component: Ng2googleChartComponent;
  let fixture: ComponentFixture<Ng2googleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2googleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2googleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
