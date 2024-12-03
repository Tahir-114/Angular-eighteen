import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./log.service";
@Injectable()
export class AccountServices{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
       
       statusUpdate = new  EventEmitter<string>();

      constructor(private loggoingService: LoggingService) {}
      addAccount(name:string , status:string){
        this.accounts.push({name:name, status:status}); 
        this.loggoingService.LogStatusChange(status);
      }
      updateAccount(id:number, status:string){
        this.accounts[id].status = status;
        this.loggoingService.LogStatusChange(status);
      }
}