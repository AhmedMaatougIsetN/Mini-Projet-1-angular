import { Injectable } from '@angular/core';
import { laptop } from '../model/laptop.model';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root',
})
export class laptopservice {
  laptops: laptop[];
  laptop!: laptop;
  types: Type[];

  constructor() {
    this.types = [
      { idType: 1, nomType: 'Gming laptop' },
      { idType: 2, nomType: 'Professional Laptop' },
      { idType: 3, nomType: 'MacBooks' },
    ];

    this.laptops = [
      {
        idlaptop: 1,
        nomlaptop: 'Lenovo Legion 5',
        prixlaptop: 4799.200 ,
        dateCreation: new Date('01/14/2011'),
        type: { idType: 1, nomType: 'Gming laptop' },
      },
      {
        idlaptop: 2,
        nomlaptop: 'ASUS Zenbook 14 ',
        prixlaptop: 3450,
        dateCreation: new Date('12/17/2010'),
        type: { idType: 2, nomType: 'Professional Laptop' },
      },
      {
        idlaptop: 3,
        nomlaptop: 'MacBook Air M1',
        prixlaptop: 2499,
        dateCreation: new Date('02/20/2020'),
        type: { idType: 3, nomType: 'MacBooks' },
      },
    ];
  }

  listelaptops(): laptop[] {
    return this.laptops;
  }

  ajouterlaptop(prod: laptop) {
    this.laptops.push(prod);
  }

  supprimerlaptop(prod: laptop) {
   
    const index = this.laptops.indexOf(prod, 0);
    if (index > -1) {
      this.laptops.splice(index, 1);
    }

  }

  consulterlaptop(id: number): laptop {
    this.laptop = this.laptops.find((p) => p.idlaptop == id)!;
    return this.laptop;
  }

  trierlaptops() {
    this.laptops = this.laptops.sort((n1, n2) => {
      if (n1.idlaptop! > n2.idlaptop!) {
        return 1;
      }
      if (n1.idlaptop! < n2.idlaptop!) {
        return -1;
      }
      return 0;
    });
  }

  updatelaptop(p: laptop) {
    this.supprimerlaptop(p);
    this.ajouterlaptop(p);
    this.trierlaptops();
  }


  listeTypes():Type[] {
    return this.types;
  }

consulterType(id:number): Type{    
        return this.types.find(type => type.idType  == id)!;
         }


}
