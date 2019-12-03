import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CsidebarComponent } from './csidebar/csidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { MaincompComponent } from './maincomp/maincomp.component';

@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CsidebarComponent,
    ProfileComponent,
    ProductsComponent,
    MaincompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
