import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import { StatusService } from './services/status.service';
import {timeout} from "rxjs/operators";
import {Employee} from "./model/employee";
import {EmployeeService} from "./services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('fade',
      [
        state('void', style({ opacity : 0})),
        transition(':enter',[ animate(300)]),
        transition(':leave',[ animate(500)]),
      ]
    )]
})
export class AppComponent implements OnInit {
  public employees: Employee[] | undefined;
  title = 'JL-website';
  faUsersPlus = faUserPlus;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit() {

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
