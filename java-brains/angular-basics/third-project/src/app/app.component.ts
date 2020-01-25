import {Component, OnInit} from '@angular/core';
import {TestService} from './services/test.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Test service is injected here
  constructor(private service: TestService, private http: HttpClient) {
    this.service.printToConsole('Got the service');
  }

  ngOnInit() {
    const observable = this.http.get('https://api.github.com/users/deepashri-cg');
    observable.subscribe(() => console.log('Got the response'));
  }
}
