import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string; }; // Initialize as null

  constructor(private serversService: ServersService, private route: ActivatedRoute , private router:Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Convert to number
      // Fallback in case the server isn't found
      const fetchedServer = this.serversService.getServer(id);
    
      if (fetchedServer) {
        this.server = fetchedServer;
      } else {
        // Handle error case, maybe show a "not found" message
        console.error('Server not found!');
      }
    }
    onEdit() {
        this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling:'preserve'});
    }
  }

