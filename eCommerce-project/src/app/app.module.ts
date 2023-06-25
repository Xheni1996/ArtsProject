import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrdersComponent } from './orders/orders.component';
import {MatCardModule} from "@angular/material/card";
import { OrderExpandedTrackOrderComponent } from './order-expanded-track-order/order-expanded-track-order.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './all-products/product-details/product-details.component';
import { FormGroup } from '@angular/forms';

// modulet e importuara nga angular materials
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllProductsModule } from './all-products/all-products.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
//import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {FlexLayoutModule} from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { EditComponent } from './login/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    OrdersComponent,
    OrderExpandedTrackOrderComponent,
    HomeComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    EditComponent,
    LoginComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AllProductsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
