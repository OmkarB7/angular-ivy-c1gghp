import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<h1>{{pageTitle}}<h1>`
})
export class AppComponent{
  pageTitle: string = "Hiii";
}