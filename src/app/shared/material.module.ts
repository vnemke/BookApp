import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
		MatTableModule,
		MatMenuModule,
		MatIconModule,
		MatSortModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatListModule,
		MatCardModule
	],
	exports: [
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
		MatTableModule,
		MatMenuModule,
		MatIconModule,
		MatSortModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatListModule,
		MatCardModule
	],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', hideRequeiradMarker: false }
		}
	]
})
export class MaterialModule { }
