L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([37.9, -77],4);

document.getElementById("button").onclick=function() {myButtonFunction()};


var park = L.marker(new L.LatLng(37.9, -77), {
    icon: L.mapbox.marker.icon({
        'marker-color': 'ff8888',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

park.bindPopup('This marker is draggable! Move it around.');
park.addTo(map);

function myButtonFunction() {
		park = L.marker(new L.LatLng(100,-50),{
	icon: L.mapbox.marker.icon({
        'marker-color': 'ff8888',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});
}
