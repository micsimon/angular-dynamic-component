///<reference path="../../../../node_modules/@angular/core/src/linker/component_factory_resolver.d.ts"/>
import {
  Component,
  ViewContainerRef,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentFactory,
  Input,
  Type
} from "@angular/core";
import {AbstractThing} from "../../model/AbstractThing";
import {PersonComponent} from "../person/person.component";
import {CarComponent} from "../car/car.component";
import {AbstractDataComponent} from "../AbstractDataComponent";
import {ThingType} from "../../model/ThingType";

@Component({
  selector: 'app-dynamic',
  templateUrl: 'dynamic.component.html',
  styleUrls: ['dynamic.component.css']
})
export class DynamicComponent implements AfterContentInit {

  @Input() private data: AbstractThing;

  @ViewChild('target', {read: ViewContainerRef})
  target: ViewContainerRef;

  private componentRef: ComponentRef<AbstractDataComponent>;

  constructor(private compiler: ComponentFactoryResolver) {

  }

  ngAfterContentInit(): void {
    let compoentToCompile: Type<AbstractDataComponent> = this.getComponentToCompile();
    let factory: ComponentFactory<AbstractDataComponent> = this.compiler.resolveComponentFactory(compoentToCompile);

    this.componentRef = this.target.createComponent(factory);
    this.componentRef.instance.data = this.data;
    this.componentRef.changeDetectorRef.detectChanges();

  }

  private getComponentToCompile(): Type<AbstractDataComponent> {
    // here is part, where u have to decide, which component gets compiled
    return this.data.getType() === ThingType.PERSON ? PersonComponent : CarComponent;
  }


}
