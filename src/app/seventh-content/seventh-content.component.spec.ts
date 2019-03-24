import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhContentComponent } from './seventh-content.component';

describe('SeventhContentComponent', () => {
  let component: SeventhContentComponent;
  let fixture: ComponentFixture<SeventhContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
