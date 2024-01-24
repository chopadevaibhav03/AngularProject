import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { ProductComponent } from './components/product/product.component';
import { RawMaterialComponent } from './components/raw-material/raw-material.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'distributor', component: DistributorComponent },
  { path: 'product', component: ProductComponent },
  { path: 'raw-material', component: RawMaterialComponent },
  { path: 'supplier', component: SupplierComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
