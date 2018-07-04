import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Person } from '../../models/person';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  users: Array<Person>;
  constructor(private _users: UsersService, private _map: MapService) { }

  ngOnInit() {
    this._users.getUsers().subscribe(
      (data: Array<Person>)=> {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  setUbicacion(user: Person){
    this._map.setCenter(parseFloat(user.address.geo.lng), parseFloat(user.address.geo.lat));
  }
}
