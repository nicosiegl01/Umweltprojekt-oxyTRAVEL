import { Component } from '@angular/core';
import {HTTPService} from "./http/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(private http:HTTPService) {
    //const

    //oebb.searchStationsNew("Wien").then(console.log);
  }
}
