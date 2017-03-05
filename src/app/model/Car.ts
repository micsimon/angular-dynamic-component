import {AbstractThing} from "./AbstractThing";
import {Type} from "./Type";

export class Car extends AbstractThing {

  constructor(private name: string,
              private power: number) {
    super(Type.PERSON);

  }

}
