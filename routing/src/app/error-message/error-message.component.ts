import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit{
  errorMessage!: string;

  constructor(private route: ActivatedRoute) { }
 ngOnInit() {
  //  this.errorMessage = this.route.snapshot.data['message'];
   this.route.data.subscribe(
    (data: Data) => {
     this.errorMessage = data['message'];
    }
   )
 }
}
