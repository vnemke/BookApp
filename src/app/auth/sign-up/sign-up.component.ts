import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { ApiService } from 'src/app/api.service';
import { AuthData } from '../auth-data.model';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;
	url = '/api/auth/register';
	authData: AuthData;

	verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	
	constructor(private fb: FormBuilder, public api: ApiService, private router: Router, private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.signUpForm = this.fb.group({
			firstName: [''],
			lastName: [''],
			email: ['',[Validators.required]],
			password: ['',[Validators.required]]
		})
	}

	signUp() {
		this.api.post(this.url, this.signUpForm.value)
		.subscribe(result => {
			this._snackBar.open('You are registered', 'End now', {
				duration: 6000,
				verticalPosition: this.verticalPosition
			});
			this.router.navigate([''])
			console.log(result);
		})
	}

}
