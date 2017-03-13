import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

let appRoutes:Routes = [
  { path:'sample-content' , component: SampleComponentComponent },
  { path:'', redirectTo: '/sample-content', pathMatch:'full'},
  { path:'**' , component: ErrorComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SampleComponentComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
