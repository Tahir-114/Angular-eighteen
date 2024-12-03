import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onloadserver(id:number){ 
    this.router.navigate(['/servers' , id , 'edit'] , {queryParams:{allowEdit: '1'}, fragment:'loading'})
  }
}