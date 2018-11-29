import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductFOrmComponent } from './product-form/product-form.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListAllComponent } from './list-all/list-all.component';
import { ProductserviceService } from './productservice.service';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    ProductFOrmComponent,
   routableComponents,
   WelcomeComponent,
   ListAllComponent,
   UpdateComponent,
   SearchComponent,
   DeleteComponent
  ],
  
  providers: [ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
