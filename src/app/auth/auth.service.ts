import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

import { AuthData } from './auth-data.model';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	url = 'http://localhost:3307/api/auth/register';
	authData: AuthData;
	
	constructor(private api: ApiService) { }

	createUser(
		// firstName: string, 
		// lastName: string, 
		// email: string, 
		// password: string
	) {
		
		this.api.post(this.url, this.authData)
		.subscribe(response => {
			console.log(response);
		})
	}
}
