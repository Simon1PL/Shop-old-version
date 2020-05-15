import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoweryComponent } from './rowery.component';

describe('RoweryComponent', () => {
  let component: RoweryComponent;
  let fixture: ComponentFixture<RoweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
