import { Component } from '@angular/core';
import * as themes from '../themes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public styleConfig: any = themes.bancodobrasil;
  public isMobile: boolean = false;
  constructor() {
    this.isMobile = window.screen.width <= 800;
  }
}
