import {NgModule} from "@angular/core";
import {PersonComponent} from "./component/person/person.component";
import {CarComponent} from "./component/car/car.component";

@NgModule({
  entryComponents: [
    PersonComponent,
    CarComponent
  ],
  declarations: [
    PersonComponent,
    CarComponent
  ]
})
export class DataComponentModule {
  static forRoot() {
    return {
      ngModule: DataComponentModule,
      providers: []
    }
  }
}
