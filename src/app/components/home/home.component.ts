import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';

//component
import { ListComponent } from '../order/list/list.component';
import { StockListComponent } from '../stock/stock-list/stock-list.component';
import { SuggestionComponent } from '../suggestion/suggestion.component';
import { ProfileComponent } from '../profile/profile.component';
import { StaffListComponent } from '../staff/staff-list/staff-list.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active:string;
  userinfo = JSON.parse(localStorage.getItem('userData'));
  constructor(private router: Router,private userService:UserService) { 
	this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
  }

  ngOnInit() {
  }
  // Detect route changes for active sidebar menu
 routeChanged(val){
 	this.active = val.url;
 }
 // Logout User
 logOut(){
 	this.userService.dologout();
 	this.router.navigate(['/login']);
 }
}
// Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: '',
 	component: StockListComponent
 },
 {
 	path: 'order',
 	component: ListComponent
 },
 {
 	path: 'suggestion',
 	component: SuggestionComponent
 },
 {
 	path: 'profile',
 	component: ProfileComponent
 },
 {
 	path: 'staff',
 	component: StaffListComponent
 }
 ];