import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] // It should be 'styleUrls' not 'styleUrl'
})
export class UserComponent implements OnInit, OnDestroy {

  user!: { id: number; name: string; };
  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: +this.route.snapshot.params['id'],  // Convert to number if needed
      name: this.route.snapshot.params['name'],
    };
    // Subscribing to route parameters for dynamic changes
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = +params['id'];  // Convert to number if needed
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribing to avoid memory leaks
    this.paramsSubscription.unsubscribe();
  }
}
