import {Component} from '@angular/core';
import {TestService} from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';

  // Test service is injected here
  constructor(service: TestService) {
    service.printToConsole('Got the service');
  }

}
