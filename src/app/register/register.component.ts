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
  }

  registerEmployee() {
    console.log(this.registerForm.value);
    this.employee = new Employee(this.registerForm.value.firstName,
      this.registerForm.value.lastName, this.registerForm.value.gender,
      this.registerForm.value.dateOfBirth,
      this.registerForm.value.departmentName);
    console.log(this.employee);
    this.employeeService.registerEmployee(this.employee)
    .subscribe(data => {
      if (data instanceof ErrorEvent) {
        alert('Employee Registration failed');
      } else {
        this.response = data;
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy() {
    this.employee = null;
  }

}
