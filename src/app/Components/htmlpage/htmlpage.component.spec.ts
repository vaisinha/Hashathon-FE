import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlpageComponent } from './htmlpage.component';

describe('HtmlpageComponent', () => {
  let component: HtmlpageComponent;
  let fixture: ComponentFixture<HtmlpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
