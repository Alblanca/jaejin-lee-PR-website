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
  status = 'DOWN';
  scripts: Array<string> = [
    'assets/js/jquery-3.2.1.min.js',
    'assets/js/plugins.js',
    'assets/js/modernizr.js'
    ];

  constructor(private statusService: StatusService,
              private readonly elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.scripts.forEach(script => { this.loadScript(script); });
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      console.log('script loaded ' + src);
    };
    this.renderer.appendChild(this.elementRef.nativeElement, script);
  }

}
