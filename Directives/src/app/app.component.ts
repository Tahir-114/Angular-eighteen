import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';
  // numbers = [1,2,3,4,5,6];
  oddnumber = [1,3,5];
  evenumber = [2,4,6];
  onlyodd = true;

  value = 5;
}
