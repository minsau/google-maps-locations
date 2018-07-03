import { Component } from '@angular/core';
import { Person } from './models/person';
import { MapComponent } from './components/map/map.component';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: Array<Person>;
  user: Person;

  constructor(){
  }
}
