export class ThingType {

  constructor(private name: string) {
  }

  public static PERSON = new ThingType("person");
  public static CAR = new ThingType("car");

}
