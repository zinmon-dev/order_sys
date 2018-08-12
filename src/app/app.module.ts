import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/order/list/list.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StaffListComponent } from './components/staff/staff-list/staff-list.component';
import { StaffAddComponent } from './components/staff/staff-add/staff-add.component';

// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListComponent,
    StockListComponent,
    SuggestionComponent,
    ProfileComponent,
    StaffListComponent,
    StaffAddComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	ReactiveFormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
