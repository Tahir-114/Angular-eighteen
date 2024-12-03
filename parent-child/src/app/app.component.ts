import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Fixed the typo here
})
export class AppComponent {
  title = 'parent-child';
  serverElements = [{ type: 'server' ,name: 'testserver' , content: 'just a test!' }]; // Optional typing for better clarity

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string})  {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  OnChangesFirst() {
    this.serverElements[0].name = 'Changes!'
  }
}
