import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from'./shared/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
	bootstrap: [AppComponent]
})
export class AppModule { }
