import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { AuthData } from './auth-data.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	url = '/api/auth/login';
	isAuth: boolean
	isAuth$: BehaviorSubject<boolean> 

	constructor(private http: HttpClient, public api: ApiService) {
		if(localStorage.getItem('token')) {
			this.isAuth$ = new BehaviorSubject<boolean>(true);
			// this.isAuth$.next(true);
		} else {
			this.isAuth$ = new BehaviorSubject<boolean>(false);
		}
	}

	getToken() {
		return localStorage.getItem('token');
	}

	signIn(email: string, password: string) {
		const authData: AuthData = {email: email, password: password}
		return this.api.post(this.url, authData)
		.pipe(
			tap(() => {
			this.isAuth$.next(true)}, 
			error => {
				error
				console.log('greska');
			}) 
		)
	}


	loggedIn() {
		return localStorage.getItem('token');
	}
}
