import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { laptop } from '../model/laptop.model';
import { Type } from '../model/type.model';
import { laptopservice } from '../services/laptop.service';

@Component({
  selector: 'app-recherche-par-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-type.component.html'
})
export class RechercheParTypeComponent implements OnInit {
  laptops: laptop[] = [];
  types: Type[] = [];
  typeSelectionne: number | null = null;

  constructor(private laptopservice: laptopservice) {}

  ngOnInit(): void {
    this.laptops = this.laptopservice.listelaptops();
    this.types = this.laptopservice.listeTypes();
  }

  get laptopsFiltres(): laptop[] {
    if (this.typeSelectionne === null) {
      return this.laptops;
    }
    return this.laptops.filter(item => item.type?.idType === Number(this.typeSelectionne));
  }
}
