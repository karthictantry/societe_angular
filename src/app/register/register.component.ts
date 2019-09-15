import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  employee: Employee;
  response: any;
  selectedValue: string;
  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    dateOfBirth: new FormControl(),
    departmentName: new FormControl(),
  });
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(Date.now());
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employee = new Employee();
  }

  registerEmployee() {
    console.log(this.registerForm.value);
    this.employee.FirstName = this.registerForm.value.firstName;
    this.employee.LastName = this.registerForm.value.lastName;
    this.employee.Gender = this.registerForm.value.gender;
    const date: Date = this.registerForm.value.dateOfBirth;
    this.employee.DateOfBirth = date.getDate().toString() + ' ' + (+date.getMonth() + +1).toString() + ' ' + date.getFullYear().toString();
    this.employee.DepartmentName = this.registerForm.value.departmentName;
    this.employeeService.registerEmployee(this.employee)
    .subscribe(data => this.response = data);
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.employee = null;
  }

}
