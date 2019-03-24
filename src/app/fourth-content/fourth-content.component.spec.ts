import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthContentComponent } from './fourth-content.component';

describe('FourthContentComponent', () => {
  let component: FourthContentComponent;
  let fixture: ComponentFixture<FourthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
