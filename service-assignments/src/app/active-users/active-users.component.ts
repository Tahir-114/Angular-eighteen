import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit{
  users!:string[];
  TotalCounter!:string;

  constructor(private userService:UserService , public counterService: CounterService) {

  }
  
   ngOnInit(){
     this.users = this.userService.activeUsers;     
   }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
