import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { StatusService } from './services/status.service';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JL-website';

  constructor() { }

  ngOnInit() {
  }

}
