import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-change-counter',
  templateUrl: './change-counter.component.html',
  styleUrls: ['./change-counter.component.css']
})
export class ChangeCounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }

}
