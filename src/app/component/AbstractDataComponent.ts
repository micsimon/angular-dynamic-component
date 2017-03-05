import {Input} from "@angular/core";
import {AbstractThing} from "../model/AbstractThing";

export abstract class AbstractDataComponent {

  @Input() public data: AbstractThing;

}
