import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //zoom level
  zoom: number = 10;

  //start position
  lat: number = 7.8731;
  lng: number = 80.7718;

  //values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

 // marks
  markers: marker[]= [
    {
      name:'company one',
      lat:6.8677256,
      lng: 79.8765835,
      draggable: true
    },
    {
      name:'company two',
      lat: 6.8728282,
      lng: 79.8914346,
      draggable: true
    },
    {
      name:'company three',
      lat: 6.8565121,
      lng: 79.8729812,
      draggable: true
    }
  ];

  constructor(){

  }

  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker:'+marker.name+' at index'+index);
  }

  mapClicked($event:any){
    console.log("map clicked");
    var newMarker = {
      name:'Untitled',
      lat:$event.coords.lat,
      lng:$event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd',marker,$event);

    var upMarker= {
      name:marker.name,
      lat:parseFloat(marker.lat),
      lng:parseFloat(marker.lng),
      draggable:false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addMarker(){
    console.log('adding marker');
    if(this.markerDraggable=='yes'){
        var isDraggable=true;
    }else {
      var  isDraggable=false;
    }

    var newMarker = {
      name:this.markerName,
      lat:parseFloat(this.markerLat),
      lng:parseFloat(this.markerLng),
      draggable:isDraggable
    }

    this.markers.push(newMarker);

  }
}
//marker type

interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;

}
