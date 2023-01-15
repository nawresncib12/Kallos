import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { InfoCardComponent } from './components/profile/info-card/info-card.component';
import { OrdersComponent } from './components/profile/orders/orders.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    InfoCardComponent,
    OrdersComponent,
    OrderCardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AppModule {}
