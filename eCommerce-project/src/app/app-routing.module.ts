import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component' 
import { OrderExpandedTrackOrderComponent } from './order-expanded-track-order/order-expanded-track-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditComponent } from './login/edit/edit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order-expanded-track-order', component:OrderExpandedTrackOrderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edit', component: EditComponent},
  { path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }