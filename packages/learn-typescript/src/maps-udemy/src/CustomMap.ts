export class CustomMap {
    private googleMap: google.maps.Map;

    marker: google.maps.Marker;


    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, { zoom: 3, center: { lat: 14.4426, lng: 79.9865 } });
        this.marker = new google.maps.Marker()

    }
}