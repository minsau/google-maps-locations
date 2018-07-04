import { Injectable, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: google.maps.Map;
  private _center = new Subject<any>();
  constructor() { }

  createScript(){
    const api_key = 'AIzaSyD_W9kLAp_U3DkCA-xjBXvLtm7s5zVvJUc';
    const script = document.createElement('script');
    script.src = `http://maps.googleapis.com/maps/api/js?key=${api_key}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return script;
  }
  setMap(map: google.maps.Map){
    this.map = map;
  }

  getMap(){
    return this.map;
  }

  initMap(map: ElementRef, lat, lng){
    const promesa = new Promise((resolve: any, reject) => {
      this.createScript().onload = () => {
        const mapProps = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 10,
          gestureHandling: <any> 'greedy',
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.setMap(new google.maps.Map(map.nativeElement, mapProps));
        resolve(this.map)
      }
    })

    return promesa;
  }

  setCenter(lat, lng){
    const coords = new google.maps.LatLng(lat, lng);
    this._center.next(coords);
  }

  getCenter(): Observable<any>{
    return this._center.asObservable();
  }
}
