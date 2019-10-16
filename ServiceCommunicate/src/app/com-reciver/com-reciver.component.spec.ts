import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComReciverComponent } from './com-reciver.component';

describe('ComReciverComponent', () => {
  let component: ComReciverComponent;
  let fixture: ComponentFixture<ComReciverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComReciverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComReciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
