import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  changesToActive: number = 0;
  changesToInactive: number = 0;

  constructor() { }

  increaseChangesToActive() {
    this.changesToActive++;
  }

  increaseChangesToInactive() {
    this.changesToInactive++;
  }

}
