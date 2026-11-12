import { Routes } from '@angular/router';
import { laptopsComponent } from './laptops/laptops.component';
import { AddlaptopComponent } from './add-laptop/add-laptop.component';
import { UpdatelaptopComponent } from './update-laptop/update-laptop.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { laptopAdminGuard } from './services/laptop-admin.guard';

export const routes: Routes = [
  { path: 'laptops', component: laptopsComponent },
  { path: 'add-laptop', component: AddlaptopComponent, canActivate: [laptopAdminGuard] },
  { path: 'updatelaptop/:id', component: UpdatelaptopComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'rechercheParType', component: RechercheParTypeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'laptops', pathMatch: 'full' }
];
