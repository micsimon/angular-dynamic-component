import {Component, OnInit} from "@angular/core";
import {AbstractDataComponent} from "../AbstractDataComponent";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent extends AbstractDataComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
