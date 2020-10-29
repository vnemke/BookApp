import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	signInForm: FormGroup;
	url = '/api/auth/login';
	hide = true

	constructor(private fb: FormBuilder, public api: ApiService, private router: Router) { }

	ngOnInit(): void {
		this.signInForm = this.fb.group({
			email: ['',[Validators.required]],
			password: ['']
		})
	}

	signIn() {
		this.api.post(this.url, this.signInForm.value)
		.subscribe(result => {
			this.router.navigate(['books'])
			console.log(result);
		})
	}
}
