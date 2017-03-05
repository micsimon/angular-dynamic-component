import {NgModule} from "@angular/core";
import {PersonComponent} from "./component/person/person.component";
import {CarComponent} from "./component/car/car.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  entryComponents: [
    PersonComponent,
    CarComponent
  ],
  declarations: [
    PersonComponent,
    CarComponent
  ],
  imports: [
    FormsModule
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
