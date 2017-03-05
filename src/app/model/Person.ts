import {AbstractThing} from "./AbstractThing";
import {Type} from "./Type";

export class Person extends AbstractThing {

  constructor(private name: string,
              private age: number) {
    super(Type.CAR);
  }

}
