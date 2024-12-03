import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
   @Output() intervalFired = new EventEmitter<number>();
   interval: any;
   lastnumber = 0;

  OnStartGame(){
  this.interval = setInterval(() => {
    this.intervalFired.emit(this.lastnumber + 1);
    this.lastnumber++;
  } ,1000);
  }
  OnPauseGame(){
    clearInterval(this.interval);
  }
}
