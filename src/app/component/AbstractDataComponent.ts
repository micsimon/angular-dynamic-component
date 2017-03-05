import {Input} from "@angular/core";

export abstract class AbstractDataComponent {

  @Input() public name: string;

}
