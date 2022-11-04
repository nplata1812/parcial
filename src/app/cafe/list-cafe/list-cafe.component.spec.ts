import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cafe } from '../cafe';
import { ListCafeComponent } from './list-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
describe('ListCafeComponent', () => {
  let component: ListCafeComponent;
  let fixture: ComponentFixture<ListCafeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule],
      declarations: [ ListCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCafeComponent);
    component = fixture.componentInstance;

    component.cafes = [
      new Cafe(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number(), faker.lorem.sentence()),
      new Cafe(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number(), faker.lorem.sentence()),
      new Cafe(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number(), faker.lorem.sentence())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un encabezado', () => {
    expect(debug.query(By.css('thead'))).toBeTruthy(); 
  })


  it('Debe tener 3 filas con la informacion correspondiente', () => {
    debug.queryAll(By.css('tr')).forEach((p,index)=>{
      if(index!==0){
        expect(p.children[0].nativeElement.innerHTML).toContain(component.cafes[index-1].id);
        expect(p.children[1].nativeElement.innerHTML).toContain(component.cafes[index-1].nombre);
        expect(p.children[2].nativeElement.innerHTML).toContain(component.cafes[index-1].tipo);
        expect(p.children[3].nativeElement.innerHTML).toContain(component.cafes[index-1].region);
      }

      let rows = debug.query(By.css('tr')).children;
      expect(rows.length).toEqual(4)
   
     
    });
  })
});
