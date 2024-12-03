import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: `
     .online{
        color:white;
     }
     .text-white{
        color:#fff;
     }
    `
})
export class ServerComponent{
    serverid: number = 10;
    serverstatus = 'No server was created!';
    name = '' ;
    usercreated = false;
    users = ['user1','user2'];
    showpassword = false;
    log: Date[] = [];


     constructor(){
        this.serverstatus = Math.random() > 0.5 ? 'server was created' : 'No server was created!'; 
     }

     getcolor() {
        return this.serverstatus === 'server was created' ? '#ddd' : '#000'
     }
     oncreateuser(){
        this.usercreated = true;
        this.users.push(this.name);
        this.serverstatus = 'Username is created! name is' + this.name;
     }
    resetUsername() {
       // this.username = ''; // Reset username to empty
      }
      ontoggledetails() {
          this.showpassword = !this.showpassword;
        //   this.log.push(this.log.length + 1);
        this.log.push(new Date());
      }
}