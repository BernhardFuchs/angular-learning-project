import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { LocalMemberService } from './services/local-member.service';
import { FilterComponent } from './components/filter/filter.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';

let appRoutes:Routes = [
  { path:'sample-content' , component: SampleComponentComponent },
  { path:'member-list', component: MemberListComponent},
  { path:'', redirectTo: '/sample-content', pathMatch:'full'},
  { path:'**' , component: ErrorComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SampleComponentComponent,
    ErrorComponentComponent,
    MemberListComponent,
    FilterComponent,
    CapitalizedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LocalMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
