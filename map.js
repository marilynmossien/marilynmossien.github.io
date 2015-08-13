




L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([40, -90],3);


//creates ocelot marker
var ocelot = L.marker(new L.LatLng(27.5, -100.5), {
    icon: L.mapbox.marker.icon({
        'marker-color': 'ff9900',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

ocelot.bindPopup('The ocelot.');
ocelot.addTo(map);

//creates jaguar marker
var jaguar = L.marker(new L.LatLng(28, -104), {
    icon: L.mapbox.marker.icon({
        'marker-color': '000000',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

jaguar.bindPopup('The jaguar.');
jaguar.addTo(map);

//creates wolf marker
var wolf = L.marker(new L.LatLng(35.4, -78.99), {
    icon: L.mapbox.marker.icon({
        'marker-color': '8f0000',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

wolf.bindPopup('The red wolf.');
wolf.addTo(map);

//creates jaguarundi marker
var undi = L.marker(new L.LatLng(34.4, -111.8), {
    icon: L.mapbox.marker.icon({
        'marker-color': '5c1f00',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

undi.bindPopup('The jaguarundi.');
undi.addTo(map);

//creates california floristic province marker
var cal = L.marker(new L.LatLng(35, -120), {
    icon: L.mapbox.marker.icon({
        'marker-color': 'ffcc00',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

cal.bindPopup('The California Floristic Province ');
cal.addTo(map);

//creates polar bear marker
var polar = L.marker(new L.LatLng(60, -143), {
    icon: L.mapbox.marker.icon({
        'marker-color': 'ffffff',
		'marker-symbol': 'park'
		
    }),
    draggable: true
});

polar.bindPopup('The polar bear.');
polar.addTo(map);

alert("WELCOME TO MAP MEMORY\nThe markers represent an endangered area or species in North and Central America. Click the marker to learn which marker represents what.\nTo play the game, try to memorize the position of the markers in the fastest amount of time possible. Then click BEGIN, and try to drag all the markers back to their original positions. The game will tell you if the markers are in the right position.\nHow good is YOUR memory?")

var myVar=setInterval(function(){document.getElementById("timer").innerHTML=incrementTimer();},1000);

var time = 0;

function incrementTimer() {
		time = time+1;
		return time;
}		

function stopTimer() {
	time=time;
	return time;
}


function myButtonFunction() { 
	var cnfrm = confirm("Ready to put the markers in their original place?");
	if (cnfrm == true) {
	clearInterval(myVar);
	map.removeLayer(ocelot); //removes ocelot marker
	map.removeLayer(jaguar) //removes old jaguar one
	map.removeLayer(wolf) //removes old wolf one
	map.removeLayer(undi)//removes old jaguarundi marker
	map.removeLayer(cal) //removes old CFP marker
	map.removeLayer(polar)//removes polar bear marker duh
	
///////////////OCELOT CODE/////////////////////////
	ocelot = L.marker(new L.LatLng(50,-50),{ //makes ocelot marker
		icon: L.mapbox.marker.icon({
        'marker-color': 'ff9900',
		'marker-symbol': 'park',
		//window.alert("the function has run");	(this does not work for some reason)
		}),
    draggable: true
	})

ocelot.bindPopup('The ocelot.');
ocelot.addTo(map); //makes ocelot marker appear

var coordinates = document.getElementById('coordinates'); 

// every time the ocelot marker is dragged, update the coordinates container
ocelot.on('dragend', ocelot_ondragend);

// Set the initial ocelot marker coordinate on load.
ocelot_ondragend();

function ocelot_ondragend() {
    var m = ocelot.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />Longitude: ' + m.lng;
	if(m.lat>=24 && m.lat<=31){ 
		if(m.lng<=-96 && m.lng>=-104) {
			window.alert("You're right! The ocelot is found in South America, Central America, and even Texas!");
		}
	}
}

////////////////NOW FOR THE JAGUAR //////////////////////////////////
jaguar = L.marker(new L.LatLng(50,-46),{ //makes jaguar marker
		icon: L.mapbox.marker.icon({
        'marker-color': '000000',
		'marker-symbol': 'park',
		}),
    draggable: true
	})

jaguar.bindPopup('The jaguar.');
jaguar.addTo(map); //makes jaguar marker appear

// every time the jaguar marker is dragged, update the coordinates container
jaguar.on('dragend', jaguar_ondragend);

// Set the initial jag marker coordinate on load.
jaguar_ondragend();

function jaguar_ondragend() {
    var j = jaguar.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + j.lat + '<br />Longitude: ' + j.lng;
	if(j.lat>=24 && j.lat<=32){ 
		if(j.lng<=-100 && j.lng>=-108) {
			window.alert("Correct! Unfortunately, the jaguar can no longer be found in the USA.");
		}
	}
}

////////////////RED WOLF //////////////////////////////////
wolf = L.marker(new L.LatLng(50,-42),{ //makes wolf marker
		icon: L.mapbox.marker.icon({
        'marker-color': '8f0000',
		'marker-symbol': 'park',
		}),
    draggable: true
	})

wolf.bindPopup('The red wolf.');
wolf.addTo(map); //makes wolf marker appear

// every time the wolf marker is dragged, update the coordinates container
wolf.on('dragend', wolf_ondragend);

// Set the initial wolf marker coordinate on load.
wolf_ondragend();

function wolf_ondragend() {
    var w = wolf.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + w.lat + '<br />Longitude: ' + w.lng;
	if(w.lat>=31 && w.lat<=39){ 
		if(w.lng<=-75 && w.lng>=-83) {
			window.alert("Previously, the red wolf could be found in much of South East US, and West to central Texas.");
		}
	}
}

////////////////JAGUARUNDI //////////////////////////////////
undi = L.marker(new L.LatLng(50,-38),{ //makes undi marker
		icon: L.mapbox.marker.icon({
        'marker-color': '5c1f00',
		'marker-symbol': 'park',
		}),
    draggable: true
	})

undi.bindPopup('The jaguarundi.');
undi.addTo(map); //makes undi marker appear

// every time the undi marker is dragged, update the coordinates container
undi.on('dragend', undi_ondragend);

// Set the initial undi marker coordinate on load.
undi_ondragend();

function undi_ondragend() {
    var u = undi.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + u.lat + '<br />Longitude: ' + u.lng;
	if(u.lat>=31 && u.lat<=41){ 
		if(u.lng<=-108 && u.lng>=-116) {
			window.alert("Yes! Hint: look up more pictures of a Jaguarundi. It is not regrettable.");
		}
	}
}

////////////////CALIFORNIA FLORISTIC PROVINCE//////////////////////////////////
cal = L.marker(new L.LatLng(50,-34),{ //makes cfp marker
		icon: L.mapbox.marker.icon({
        'marker-color': 'ffcc00',
		'marker-symbol': 'park',
		}),
    draggable: true
	})

cal.bindPopup('The California Floristic Province.');
cal.addTo(map); //makes cfp marker appear

// every time the cfp marker is dragged, update the coordinates container
cal.on('dragend', cal_ondragend);

// Set the initial cfp marker coordinate on load.
cal_ondragend();

function cal_ondragend() {
    var c = cal.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + c.lat + '<br />Longitude: ' + c.lng;
	if(c.lat>=31 && c.lat<=39){ 
		if(c.lng<=-116 && c.lng>=-124) {
			window.alert("whaddUP Cali");
		}
	}
}


////////////////POLAR BEARS//////////////////////////////////
polar = L.marker(new L.LatLng(50,-30),{ //makes polar bear marker
		icon: L.mapbox.marker.icon({
        'marker-color': 'ffffff',
		'marker-symbol': 'park',
		}),
    draggable: true
	})

polar.bindPopup('The polar bear.');
polar.addTo(map); //makes polar marker appear

// every time the polar marker is dragged, update the coordinates container
polar.on('dragend', polar_ondragend);

// Set the initial polar marker coordinate on load.
polar_ondragend();

function polar_ondragend() {
    var p = polar.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + p.lat + '<br />Longitude: ' + p.lng;
	if(p.lat>=56 && p.lat<=64){ 
		if(p.lng<=-139 && p.lng>=-147) {
			window.alert("Right on!Polar bears can in fact be found in Alaska.");
		}
	}
}


}



}



