import {Component, OnInit} from "@angular/core";
import {AbstractDataComponent} from "../AbstractDataComponent";

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent extends AbstractDataComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
