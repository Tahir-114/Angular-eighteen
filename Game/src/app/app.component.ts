import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Game';
  OddNumbers: number[] = [];
  EvenNumbers: number[] = [];
  onIntervalFired(firednumber:number){
   if(firednumber % 2 === 0){
      this.EvenNumbers.push(firednumber);
   } else{
    this.OddNumbers.push(firednumber)
   }
  }
}
