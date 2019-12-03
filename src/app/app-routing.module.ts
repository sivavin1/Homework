import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { MaincompComponent } from './maincomp/maincomp.component';


const routes: Route[] = [
  { path: 'home', component: MaincompComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

