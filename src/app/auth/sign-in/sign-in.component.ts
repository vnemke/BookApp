import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
	signInForm: FormGroup;
	loginError= false;

	constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

	ngOnInit(): void {
		this.signInForm = this.fb.group({
			email: ['',[Validators.required]],
			password: ['', [Validators.required]]
		})
		
	}

	OnSignIn() {
		this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password)
		.subscribe((res: string) => {
			localStorage.setItem('token', res)
			this.router.navigate(['books'])},
			err => {
				this.loginError= true;
			}
		)
	}

	onChangeFunction(){
		this.loginError = false	
	}
}
