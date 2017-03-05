import {Component} from "@angular/core";
import {AbstractThing} from "../../model/AbstractThing";
import {Car} from "../../model/Car";
import {Person} from "../../model/Person";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  private data: AbstractThing[] = [
    new Car("Audi", 203),
    new Person("Dieter", 55),
    new Person("Hans", 18),
    new Car("Mazda", 334)
  ];


  getData(): AbstractThing[] {
    return this.data;
  }

}
