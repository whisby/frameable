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




@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, ContextNavComponent, DashComponent, HeadingBoxComponent, DashboardComponent, OrderingComponent
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
