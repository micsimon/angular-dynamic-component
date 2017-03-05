import {AbstractThing} from "./AbstractThing";
import {ThingType} from "./ThingType";

export class Person extends AbstractThing {

  constructor(name: string, private age: number) {
    super(name, ThingType.PERSON);
  }

}
