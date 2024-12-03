import { Component} from '@angular/core';
import { LoggingService } from '../log.service';
import { AccountServices } from '../account.service';

@Component({
  selector: 'app-new-accont',
  templateUrl: './new-accont.component.html',
  styleUrl: './new-accont.component.css',
  // providers:  [LoggingService]

})
export class NewAccontComponent {
 
   
  constructor(private  loggingService: LoggingService, 
              private accountsService:AccountServices) {
                this.accountsService.statusUpdate.subscribe(
                  (status:string) => alert('New Status' + status)
                )
               }


  onCreateAccount(accountName: string, accountStatus: string) {
  this.accountsService.addAccount(accountName, accountStatus)
    //  this.loggingService.LogStatusChange(accountStatus);
  }
}
