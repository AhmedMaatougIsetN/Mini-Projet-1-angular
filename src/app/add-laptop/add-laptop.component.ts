import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { laptop } from '../model/laptop.model';
import { laptopservice } from '../services/laptop.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-laptop',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-laptop.component.html'
})
export class AddlaptopComponent implements OnInit {

  newlaptop = new laptop();
  message! : string;
  types! : Type[];
  newIdType! : number;
  newType! : Type;


  constructor(private laptopservice: laptopservice,
              private router :Router
   ) {}



  ngOnInit() {
    this.types = this.laptopservice.listeTypes();
  }



  addlaptop(){this.newType = this.laptopservice.consulterType(this.newIdType);
    this.newlaptop.type = this.newType;
    this.laptopservice.ajouterlaptop(this.newlaptop);
    this.router.navigate(['laptops']);

  }


}
