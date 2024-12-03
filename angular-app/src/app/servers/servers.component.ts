import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  ServerCreation = 'Server Is not Created';

  servername = '';

  username = '';

setTimeout: any;
onclick: any;
  constructor () {
   setTimeout(() => {
      this.allowNewServer = true;
   },2000)
  }
   
  OnClickEvent() {
    this.ServerCreation = "Server Is Created"
  }
  updateserverstatus(event: any){
     console.log(event);
     this.servername = event.target.value;
  }
}
