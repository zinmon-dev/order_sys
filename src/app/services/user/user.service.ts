import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  dologin(data) {
	if(data.email == "admin@gmail.com" && data.password == "admin123") {
		return {
			code : 200,
			message : "Login successful",
			data : data
		}
	} else if(data.email == "manager@gmail.com" && data.password == "manager123") {
			return {
			code : 200,
			message : "Login successful",
			data : data
		}
	} else if(data.email == "staff@gmail.com" && data.password == "staff123") {
			return {
			code : 200,
			message : "Login successful",
			data : data
		}
	} else {
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			}
	}
  }
 dologout() {
	localStorage.removeItem('userData');
 }
}
