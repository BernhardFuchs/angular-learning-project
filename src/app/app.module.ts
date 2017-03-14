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
import { MemberFormComponent } from './components/member-form/member-form.component';
import { MemberFormDeactivatorService } from './services/member-form-deactivator.service';
import { NameValidatorDirective } from './directives/name-validator.directive';

let appRoutes:Routes = [
  { path:'sample-content' , component: SampleComponentComponent },
  { 
    path: 'member-form/:id',
    component: MemberFormComponent,
    canDeactivate:[MemberFormDeactivatorService]
  } ,
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
    CapitalizedPipe,
    MemberFormComponent,
    NameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LocalMemberService, MemberFormDeactivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
