import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {DataService} from "./service/data/data.service";
import {DynamicComponent} from "./component/dynamic/dynamic.component";
import {DataComponentModule} from "./data-component.module";

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataComponentModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
