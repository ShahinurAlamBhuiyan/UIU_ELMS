import { AfterViewInit, Component } from '@angular/core';
import { Collapse, Dropdown, initTE, } from "tw-elements";


@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventPage implements AfterViewInit {
  ngAfterViewInit(): void {
    initTE({
      Collapse,
      Dropdown
    });
  }
}
