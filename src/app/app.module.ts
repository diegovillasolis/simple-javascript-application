import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTableModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ListCarComponent } from './components/list-car/list-car.component';
import { ComparatorCarComponent } from './components/dashboard/comparator-car.component';
import { ItemCarComponent } from './components/item-car/item-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    ComparatorCarComponent,
    ItemCarComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, 
    MatCardModule, 
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
