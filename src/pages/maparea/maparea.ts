import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  GroundOverlay,
  ILatLng,
  Circle,
  Polygon,
  PolylineOptions
  // CameraPosition,
  // MarkerOptions,
  // Marker
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maparea',
  templateUrl: 'maparea.html',
})
export class MapareaPage {
  map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 51.242280,
          lng: 6.722329
        },
        zoom: 15,
        tilt: 30
      },
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true
      }
    };

    this.map = GoogleMaps.create('map_canvas_area', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        // Now you can use all methods safely.
        // ------------- Marker -----------------//
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 51.242280,
            lng: 6.722329
          }
        }).then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('This is bike');
            });
        });
        let zindex = 99999;
        // ------------- Polygon -----------------//
        let GORYOKAKU_POINTS: ILatLng[] = [
          //51.244007, 6.719283
          { lat: 51.244007, lng: 6.719283 },
          //51.242410, 6.719427
          { lat: 51.242410, lng: 6.719427 },
          //51.241891, 6.718886
          { lat: 51.241891, lng: 6.718886 },
          //51.240598, 6.717064
          { lat: 51.240598, lng: 6.717064 },
          //51.238483, 6.720907
          { lat: 51.238483, lng: 6.720907 },
          //51.237847, 6.725600
          { lat: 51.237847, lng: 6.725600 },
          //51.238593, 6.725788
          { lat: 51.238593, lng: 6.725788 },
          //51.239879, 6.724176
          { lat: 51.239879, lng: 6.724176 },
          //51.244808, 6.725954
          { lat: 51.244808, lng: 6.725954 },
          //51.245749, 6.722464
          { lat: 51.245749, lng: 6.722464 },
          //51.246350, 6.719681
          { lat: 51.246350, lng: 6.719681 },
          //51.243723, 6.718544


          { lat: 51.243723, lng: 6.718544 }
        ];
        let options: PolylineOptions = {
          'points': GORYOKAKU_POINTS,
          'strokeColor': '#0E6655',
          'fillColor': '#D1F2EB',
          'strokeWidth': 1,
          'zIndex': ++zindex
        };
        this.map.addPolygon(options).then((polygon: Polygon) => {

        });
        // ------------- GroundOverlay -----------------//
        let bounds: ILatLng[] = [
          //51.243606, 6.720023
          //51.242707, 6.721382
          { "lat": 51.243606, "lng": 6.720023 },
          { "lat": 51.242707, "lng": 6.721382 }
        ];
        this.map.addGroundOverlay({
          'url': 'assets/imgs/logo.png',
          'bounds': bounds,
          'opacity': 0.5,
          'clickable': true,
          'zIndex': ++zindex
        }).then((groundOverlay: GroundOverlay) => {
          groundOverlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(() => {
            alert('This is GoundOverlay');
          });
        });

        // ------------- Circle -----------------//
        this.map.addCircle({
          'center': { 'lat': 51.242280, 'lng': 6.722329 },
          'radius': 100,
          'strokeColor': '#5B2C6F',
          'strokeWidth': 2,
          'fillColor': '#E8DAEF',
          'clickable': true,
          'zIndex': ++zindex
        }).then((circle: Circle) => {
          circle.on(GoogleMapsEvent.CIRCLE_CLICK).subscribe(() => {
            alert('This is Circle');
          });
        });
      });
  }
}
