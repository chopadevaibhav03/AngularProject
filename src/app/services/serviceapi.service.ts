import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  private baseUrl = 'http://localhost:8080'; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) { }

  getAllAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllAdmins`);
  }
  
  saveAdmin(admin: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/saveAdmin`, admin);
  }
}
