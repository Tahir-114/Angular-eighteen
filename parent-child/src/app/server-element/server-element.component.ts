import { Component , Input, OnInit, SimpleChange, ViewEncapsulation} from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent {
  @Input('srvelement') element: { type: string; name: string; content: string; }
   = { type: '', name: '', content: '' }; // Default initialization
   @Input() name!: string;

   constructor(){
    console.log('Constructor Called')
   }
   ngOnChanges(changes:SimpleChange){
    console.log('Ngoncahnges called!')
    console.log(changes)
   }
   ngOnInit(){
    console.log('NgOninit Called!')
   }
}