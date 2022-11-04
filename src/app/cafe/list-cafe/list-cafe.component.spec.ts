import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCafeComponent } from './list-cafe.component';

describe('ListCafeComponent', () => {
  let component: ListCafeComponent;
  let fixture: ComponentFixture<ListCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
