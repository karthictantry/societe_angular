import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EmployeeService } from '../register/employee.service';
import { Employee } from '../register/employee.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  employees: Employee[];
  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dateOfBirth', 'departmentName'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe((data: Employee[]) => this.employees = data);
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
  }

}
