import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTableModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule, MatSidenavModule, MatExpansionModule, MatListModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ListCarComponent } from './components/list-car/list-car.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: ListCarComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    DashboardComponent,
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
    MatSidenavModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
