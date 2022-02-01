import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'encre-orage-studio';
  scrollHaut = window.pageYOffset; 
  scrollGauche = window.pageXOffset;
}
