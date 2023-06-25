import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  {path:"all-products", component: AllProductsComponent},
  {path:  "product-details/:id", component:ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllProductsRoutingModule { }
