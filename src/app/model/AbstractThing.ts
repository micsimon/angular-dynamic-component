import {ThingType} from "./ThingType";

export abstract class AbstractThing {

  constructor(private name: string, private type: ThingType) {
  };

  getName(): string {
    return this.name;
  }

  getType(): ThingType {
    return this.type;
  }
}
