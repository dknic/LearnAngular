import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotauthorizeComponent } from './notauthorize.component';

describe('NotauthorizeComponent', () => {
  let component: NotauthorizeComponent;
  let fixture: ComponentFixture<NotauthorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotauthorizeComponent]
    });
    fixture = TestBed.createComponent(NotauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
