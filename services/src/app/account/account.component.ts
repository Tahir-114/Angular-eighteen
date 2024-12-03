import { Component, Input} from '@angular/core';
import { LoggingService } from '../log.service';
import { AccountServices } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
 
  constructor(private  loggingService: LoggingService , private  accountService: AccountServices) { }

  onSetTo(status: string) {
     this.accountService.updateAccount(this.id, status);
    //  this.loggingService.LogStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}