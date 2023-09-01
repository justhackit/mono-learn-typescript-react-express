"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
class CustomMap {
    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), { zoom: 3, center: { lat: 14.4426, lng: 79.9865 } });
        this.marker = new google.maps.Marker();
    }
}
exports.CustomMap = CustomMap;
