import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  gmapElement: ElementRef;
  map: google.maps.Map;
  constructor(private _map: MapService) { }

  ngOnInit() {
    this.setCenter();
  }

  setCenter(){
    console.log('Sí se subscribe');
    this._map.getCenter().subscribe(
      (coords: any) => {
        console.log(coords)
        this.map.setCenter(coords);
      },
      error => {
        console.log(error);
      }
    );
  }

  @ViewChild('gmap') set content(content: ElementRef) {
    this.gmapElement = content;
    if (this.gmapElement !== undefined) {
      this._map.initMap(this.gmapElement, 19.4236137,-99.185964)
      .then((map: any) => {
        this.map = map; 
      })
      .catch(error => console.log(error));
    }
  }

}
