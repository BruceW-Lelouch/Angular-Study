import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSenderComponent } from './com-sender.component';

describe('ComSenderComponent', () => {
  let component: ComSenderComponent;
  let fixture: ComponentFixture<ComSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
