import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    new Employee('Karthic', 'Tantry', 'M', new Date(2000, 8, 16).toString(), 'Onboarding'),
    new Employee('Brunda', 'Shree', 'F', new Date(1918, 2, 18).toString(), 'Servicing'),
    new Employee('Jyothi', 'Sree', 'F', new Date(2002, 8, 6).toString(), 'Digital'),
    new Employee('Johny', 'Bunny', 'M', new Date(1960, 12, 3).toString(), 'Payments'),
    new Employee('Ada', 'Lovelace', 'F', new Date(1919, 4, 1).toString(), 'Onboarding'),
    new Employee('Joseph', 'Stalin', 'M', new Date(2008, 6, 23).toString(), 'Payments')
  ];
  successResponse = { 'Response Code' : 200, 'Response Message' : 'Employee Registration Successful' };
  serviceURL = 'localhost:8080/employees';
  userRegistered = false;
  /*httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; */
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    // return this.http.get<Employee[]>(this.serviceURL, this.httpOptions);
    return of(this.employees);
  }

  registerEmployee(employee: Employee) {
    // return this.http.post(this.serviceURL + '/register', employee, this.httpOptions);
    if (!this.userRegistered) {
      this.employees = [];
    }
    this.employees.push(employee);
    this.userRegistered = true;
    return of(this.successResponse);
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
      'Something happened; please try again later.');
  };
}
