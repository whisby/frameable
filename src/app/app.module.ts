import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContextNavComponent } from './context-nav/context-nav.component';
import { DashComponent } from './dash/dash.component';
import { HeadingBoxComponent } from './heading-box/heading-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderingComponent } from './ordering/ordering.component';
import { ProductComponent } from './product/product.component';
import { FramingComponent } from './framing/framing.component';
import { CmsComponent } from './cms/cms.component';
import { SettingsComponent } from './settings/settings.component';
import { QuickLinkComponent } from './quick-link/quick-link.component';




@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, ContextNavComponent, DashComponent, HeadingBoxComponent, DashboardComponent, OrderingComponent, ProductComponent, FramingComponent, CmsComponent, SettingsComponent, QuickLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
