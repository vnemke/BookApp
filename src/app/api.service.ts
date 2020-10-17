import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) { }

	// getOne<T>(url: string): Observable<T> {
	// 	return this._http.get<T>(url)
	// }

	// get<T>(url: string, params?): Observable<T> {
	// 	let requestParams = params ? new HttpParams({ fromObject: params }) : null;
	// 	return this._http.get<T>(url, { params: requestParams })
	// }

	// post<T>(url: string, body: Object): Observable<T> {
	// 	return this._http.post<T>(url, body)
	// }

	// put<T>(url: string, body: Object): Observable<T> {
	// 	return this._http.put<T>(url, body)
	// }

	// delete<T>(url: string): Observable<T> {
	// 	return this._http.delete<T>(url)
	// }

	// getOne<T>(url: string): Observable<T> {
	// 	return this.http.get<T>(url)
	// }

	get<T>(url: string): Observable<T> {
		return this.http.get<T>(url)
	}

	post<T>(url: string, body: Object): Observable<T> {
		return this.http.post<T>(url, body)
	}

	put<T>(url: string, body: Object): Observable<T> {
		return this.http.put<T>(url, body)
	}

	delete<T>(url: string): Observable<T> {
		return this.http.delete<T>(url)
	}

}
