import {RouterOutlet} from "@angular/router";
import {Component} from "@angular/core";

@Component({
  selector: 'app',
  standalone: true,
  exportAs: "app",
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class MainComponent {}
