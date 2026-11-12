import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { laptop } from '../model/laptop.model';
import { laptopservice } from '../services/laptop.service';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  laptops: laptop[] = [];
  searchTerm = '';

  constructor(private laptopservice: laptopservice) {}

  ngOnInit(): void {
    this.laptops = this.laptopservice.listelaptops();
  }

  get laptopsFiltres(): laptop[] {
    const terme = this.searchTerm.trim().toLocaleLowerCase();
    return this.laptops.filter(item => item.nomlaptop.toLocaleLowerCase().includes(terme));
  }
}
