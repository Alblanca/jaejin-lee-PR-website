import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { StatusService } from './services/status.service';
import {timeout} from "rxjs/operators";
import {Employee} from "./model/employee";
import {EmployeeService} from "./services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  public employees: Employee[];
  title = 'JL-website';
  faUsersPlus = faUserPlus;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    )
  }

  onOpenModal(employee: Employee, mode: string): void {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
  }

}
