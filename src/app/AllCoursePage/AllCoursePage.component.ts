import { AfterViewInit, Component } from '@angular/core';
import { Collapse, Dropdown, initTE, } from "tw-elements";
@Component({
  selector: 'app-allcoursepage',
  templateUrl: './allcoursepage.component.html',
  styleUrls: ['./allcoursepage.component.css']
})
export class AllCoursePage implements AfterViewInit {
  ngAfterViewInit(): void {
    initTE({ Collapse, Dropdown });
  }
}
