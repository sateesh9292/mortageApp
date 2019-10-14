import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMortageComponent } from './create-mortage.component';

describe('CreateMortageComponent', () => {
  let component: CreateMortageComponent;
  let fixture: ComponentFixture<CreateMortageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMortageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMortageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
