import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { FramingComponent } from './framing/framing.component';
import { OrderingComponent } from './ordering/ordering.component';
import { CmsComponent } from './cms/cms.component';
import { AssetComponent } from './asset/asset.component';
import { SettingsComponent } from './settings/settings.component';


/* ROUTES */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'framing', component: FramingComponent },
  { path: 'ordering', component: OrderingComponent },
  { path: 'asset', component: AssetComponent },
  { path: 'cms', redirectTo: 'cms/pages', pathMatch: 'full' },
  { path: 'cms/pages', component: CmsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
