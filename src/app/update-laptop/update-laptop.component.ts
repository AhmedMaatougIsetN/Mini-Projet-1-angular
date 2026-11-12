import { Component, OnInit } from '@angular/core';
import { laptop } from '../model/laptop.model';
import { ActivatedRoute, Router } from '@angular/router';
import { laptopservice } from '../services/laptop.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-laptop',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-laptop.component.html',
  styles: ``
})
export class UpdatelaptopComponent implements OnInit {
  currentlaptop  = new laptop();

  types! : Type[];
 updatedTypeId! : number;

  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private laptopservice: laptopservice
) { }

ngOnInit(): void {
  this.types = this.laptopservice.listeTypes();
  this.currentlaptop = this.laptopservice.consulterlaptop(this.activatedRoute.snapshot.params['id']);
  this.updatedTypeId=this.currentlaptop.type.idType;
}




updatelaptop() {
  this.currentlaptop.type=this.laptopservice.consulterType(this.updatedTypeId);
     this.laptopservice.updatelaptop(this.currentlaptop);
     this.router.navigate(['laptops']);
   }
 

}
