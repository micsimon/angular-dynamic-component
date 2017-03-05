import {Component, OnInit} from "@angular/core";
import {AbstractThing} from "../../model/AbstractThing";

@Component({
  selector: 'app-dynamic',
  templateUrl: 'dynamic.component.html',
  styleUrls: ['dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  private data: AbstractThing;

  constructor() {


  }

  ngOnInit() {
  }

}
