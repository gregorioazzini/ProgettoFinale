import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mappa',
    templateUrl: './mappa.component.html',
    styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {
    lng: any
    lat: any
    zoom: number = 15

    constructor() {
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }
    }

    ngOnInit() {

    }

}
