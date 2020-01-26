import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() noOfPages;
  pages: number[];

  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.noOfPages);
  }

}
