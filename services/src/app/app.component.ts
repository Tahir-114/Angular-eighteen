import { Component, OnInit } from '@angular/core';
import { AccountServices } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

   accounts: {name:string, status:string}[] = [];
    
   constructor(private accountService: AccountServices){}

   ngOnInit(){
     this.accounts  = this.accountService.accounts;

   }
   
  onAccountAdded(newAccount: {name: string, status: string}) {
   
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    
  }
}
