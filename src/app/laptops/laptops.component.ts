import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { laptop } from '../model/laptop.model';
import { laptopservice } from '../services/laptop.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class laptopsComponent implements OnInit  {
  laptops! : laptop[];
  constructor(private laptopservice: laptopservice, public authService: AuthService ) {
    this.laptops = laptopservice.listelaptops();
     
    
   }
  
   ngOnInit() {
   
     }

     supprimerlaptop(p: laptop)
   {
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
       this.laptopservice.supprimerlaptop(p);
   }

    

}
