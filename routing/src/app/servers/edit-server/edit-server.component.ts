import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService , private route:ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
       (queryParams: Params) =>{
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
       }
    );
    const server = this.serversService.getServer(1);
    if (server) {
      this.server = server;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    } else {
      console.error('Server not found');
      // Handle the case when the server is not found
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
