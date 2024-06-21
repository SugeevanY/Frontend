import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css'
})
export class WorkersComponent implements OnInit{

  constructor() {
  }
  fieldWorkers: any[] = [];
  ngOnInit() {
    this.loadFieldWorkers()
  }

  loadFieldWorkers(){



  }
}

