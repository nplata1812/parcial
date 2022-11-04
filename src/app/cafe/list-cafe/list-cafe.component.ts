import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
@Component({
  selector: 'app-list-cafe',
  templateUrl: './list-cafe.component.html',
  styleUrls: ['./list-cafe.component.css']
})
export class ListCafeComponent implements OnInit {

  constructor(private cafeService: CafeService,) { }

  cafes:Array<Cafe>=[];
  blend:number=0;
  origin:number=0;
  
  ngOnInit(): void {
    this.getCafes()
  }

  getCafes(): void {
    this.cafeService.getCafes().subscribe(
      async (cafes) => {
        this.cafes = cafes;
     
        this.blend=cafes.filter((item)=>{return item.tipo==="Blend"}).length
        this.origin=cafes.filter((item)=>{return item.tipo==="Café de Origen"}).length
        
      }
    );
  }

}
