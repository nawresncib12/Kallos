import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: CatalogComponent },
      { path: ':id', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
