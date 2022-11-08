import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  number: number = 0;

  //create an observable
  myObservable = new Observable((observer) => {
    observer.next(this.number++);
  })

  add() {
    this.myObservable.subscribe((value) => {
      console.log(value);
    });
  }
}
