import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getInfo(countryId: string): Observable<any> {
    return this.http.get(`http://api.worldbank.org/v2/country/${countryId}?format=json`);
  }
}
