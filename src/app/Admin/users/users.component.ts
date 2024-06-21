import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

//import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  customers:any[] = [];

  constructor() {
  }

  ngOnInit() {
  this.loadUsers()
  }

  loadUsers(){
  }
}
