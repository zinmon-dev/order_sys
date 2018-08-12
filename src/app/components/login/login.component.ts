import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/config/config.service';
import { RouterModule, Routes ,Router} from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private userService:UserService,private router: Router,private toastr: ToastrService) { 
	this.loginForm = this.formBuilder.group({
			email: ['',  [Validators.required, ValidationService.emailValidator]],
			password: ['',[Validators.required, ValidationService.passwordValidator]]
		});
  }

  ngOnInit() {
  }
  //login function
  doLogin(){
	let login = this.userService.dologin(this.loginForm.value);
	this.success(login);
  }
  // Login success function
	success(data){
		if (data.code == 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
			this.toastr.success('Success', "Logged In Successfully");
		}else{
			this.toastr.error('Failed', "Invalid Credentials");
		}
	}

}
