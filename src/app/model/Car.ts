import {AbstractThing} from "./AbstractThing";
import {ThingType} from "./ThingType";

export class Car extends AbstractThing {

  constructor(name: string, private power: number) {
    super(name, ThingType.PERSON);
  }

}
