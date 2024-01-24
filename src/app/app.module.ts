import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { ProductComponent } from './components/product/product.component';
import { RawMaterialComponent } from './components/raw-material/raw-material.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AdminlistComponent } from './components/adminlist/adminlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    CompanyComponent,
    DistributorComponent,
    ProductComponent,
    RawMaterialComponent,
    SupplierComponent,
    AdminlistComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
