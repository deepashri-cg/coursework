import {Component} from '@angular/core';
import {TestService} from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private service: TestService;
  // Test service is injected here
  constructor(service: TestService) {
    this.service = service;
    this.service.printToConsole('Got the service');
  }

}
