var mapLocation = new google.maps.LatLng(24.893379, 67.0280609); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 11, //change zoom here
        center: mapLocation,
				scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'), 
    mapOptions);
    
    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Site Name', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE,
        position: mapLocation
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
    
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
