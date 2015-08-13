/* L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
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
} */

var slideimages = new Array() 
slideimages[0] = new Image()
slideimages[0].src = "washington.png" 
slideimages[1] = new Image()
slideimages[1].src = "lightning.png"
slideimages[2] = new Image()
slideimages[2].src = "dcc.png"
slideimages[3] = new Image()
slideimages[3].src = "lincoln.png"
slideimages[4] = new Image()
slideimages[4].src = "spear.png"
slideimages[5] = new Image()
slideimages[5].src = "dc.png"


var step=0; 

function slideit(){
	document.getElementById('slide').src = slideimages[step].src
	if(step<5){
		step++
	}else{
		step=0
	}
	setTimeout("slideit()",5000)
}
slideit()





var slidetext2 = [
"Red wolves are threatened by human development and illegal hunting.", 
"The decrease in Arctic ice due to global warming threatens the polar bear.", 
"The adorable jaguarundi is threatened by habitat loss.", 
"Jaguars are threatened by loss of their rainforest habitat.", 
"Habitat fragmentation threatens the ocelot.", 
"The California Floristic Province is threatened by commercial farming."] 


var slideimages2 = new Array() 

slideimages2[0] = new Image()
slideimages2[0].src = "redwolf.png" 
slideimages2[1] = new Image()
slideimages2[1].src = "polarbear.png"
slideimages2[2] = new Image()
slideimages2[2].src = "jaguarundi.png"
slideimages2[3] = new Image()
slideimages2[3].src = "jaguar.png"
slideimages2[4] = new Image()
slideimages2[4].src = "ocelot.png"
slideimages2[5] = new Image()
slideimages2[5].src = "calif.png"


var steps=0; 
function slideit2(){
	document.getElementById('slide2').src = slideimages2[steps].src
	document.getElementById('envi').innerHTML = slidetext2[steps]
	if(steps<5){
		steps++
	}else{
		steps=0
	}
	setTimeout("slideit2()",7000)
}
slideit2();  



var slidetext3 = [
"Donald Trump is currently leading in the Republican polls.", 
"Hillary Clinton has been the leading Democratic candidate for some time.", 
"Jeb Bush's brother AND father were presidents. Wow.", 
"Bernie Sanders' following has been increasing lately.", 
"Scott Walker is famous for fighting teachers' unions in Wisconsin.", 
"You didn't know Joe Biden was running for president? Yeah, neither did we.",
"Ben Carson has 67 honorary doctorates and is a retired neurosurgeon.",
"Who even is Jim Webb?"] 

var slideimages3 = new Array() 
slideimages3[0] = new Image()
slideimages3[0].src = "trump.png" 
slideimages3[1] = new Image()
slideimages3[1].src = "clinton.png"
slideimages3[2] = new Image()
slideimages3[2].src = "bush.png"
slideimages3[3] = new Image()
slideimages3[3].src = "sanders.png"
slideimages3[4] = new Image()
slideimages3[4].src = "scottwalker.png"
slideimages3[5] = new Image()
slideimages3[5].src = "biden.png"
slideimages3[6] = new Image()
slideimages3[6].src = "carson.png"
slideimages3[7] = new Image()
slideimages3[7].src = "jimwebb.png"

var stepps=0; 

function slideit3(){
	document.getElementById('slide3').src = slideimages3[stepps].src
	document.getElementById('ele').innerHTML = slidetext3[stepps]
	if(stepps<7){
		stepps++
	}else{
		stepps=0
	}
	setTimeout("slideit3()",7000)
}

slideit3()











