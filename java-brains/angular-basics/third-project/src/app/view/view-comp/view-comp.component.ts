import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {
  private readonly msg: string;

  constructor(private service: TestService) {
    this.msg = 'Calling service from inner module view component';
    service.printToConsole(this.msg);
  }

  ngOnInit() {
  }
}
