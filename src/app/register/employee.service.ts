import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  serviceURL = 'localhost:8080/employees';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    this.httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    this.httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    this.httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    this.httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get<Employee[]>(this.serviceURL, this.httpOptions);
  }

  registerEmployee(employee: Employee) {
    this.httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    this.httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    this.httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    this.httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.post(this.serviceURL + '/register', employee, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
