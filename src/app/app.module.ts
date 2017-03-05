import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {PersonComponent} from "./component/person/person.component";
import {CarComponent} from "./component/car/car.component";
import {DataService} from "./service/data/data.service";
import {DynamicComponent} from "./component/dynamic/dynamic.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CarComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
