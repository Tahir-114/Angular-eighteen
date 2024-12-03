import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('servercontentinput')
  ServerContentinput!: ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}> ();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>() ;

  onAddServer(nameinput:HTMLInputElement) {
    console.log(this.ServerContentinput)
   this.serverCreated.emit({
    serverName:nameinput.value,
    serverContent:this.ServerContentinput.nativeElement.value
   });
  }

  onAddBlueprint(nameinput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameinput.value,
      serverContent:this.ServerContentinput.nativeElement.value
     });
    }
}
