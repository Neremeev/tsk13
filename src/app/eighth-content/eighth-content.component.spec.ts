import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthContentComponent } from './eighth-content.component';

describe('EighthContentComponent', () => {
  let component: EighthContentComponent;
  let fixture: ComponentFixture<EighthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
