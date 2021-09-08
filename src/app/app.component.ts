import { Component, OnInit } from '@angular/core';
import { StatusService } from './services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JL-website';
  status = 'DOWN';

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService
      .getStatus()
      .then((result: any) => {
        this.status = result.status;
      });
  }

}
