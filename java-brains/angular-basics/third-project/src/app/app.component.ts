import {Component} from '@angular/core';
import {TestService} from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Test service is injected here
  constructor(private service: TestService) {
    this.service.printToConsole('Got the service');
  }

}
