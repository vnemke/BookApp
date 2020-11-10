import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isAuth = false

	constructor(private router: Router, public authService: AuthService) {}

	ngOnInit(): void {
		this.authService.isAuth$.subscribe(value => {this.isAuth = value})	
	}

	onLogout() {
		localStorage.removeItem('token');
		this.router.navigate(['']) 
		this.isAuth = false;
	}	
}
