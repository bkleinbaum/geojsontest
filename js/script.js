//add map

var map = L.map('map');
map.setView([40.681339, -73.96302], 12
	);

// [40.712437, -74.008423]]
L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map)


//import layers
function popUp(feature, layer) {
  layer.bindPopup(feature.properties.name);
}


var to1000 = new L.GeoJSON.AJAX("js/0-1000.geojson", {onEachFeature:makeMarkers
});
// to1000.addTo(map);

// function make0to1000Markers(feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency)
// };


var toTwentyFive = new L.GeoJSON.AJAX("js/2500.geojson", {onEachFeature:makeMarkers
});

// function makeMarkers (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};


var toFive = new L.GeoJSON.AJAX("js/2500-5000.geojson", {onEachFeature:makeMarkers
});
// toFive.addTo(map);

// function makeMarkers5000 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};


var toTen = new L.GeoJSON.AJAX("js/5000-10000.geojson", {onEachFeature:makeMarkers
});
// toTen.addTo(map);

// function makeMarkers10000 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};

var toInfinty = new L.GeoJSON.AJAX("js/10000.geojson", {onEachFeature:makeMarkers
});
// toInfinty.addTo(map);

// function makeMarkersInfinty (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency+"." 
// 		)};

function makeMarkers (feature,layer) {
	layer.bindPopup(
		"<b>"
		+feature.properties.address 
		+"</b>"
		+"<br>"
		+"This lot is "
		+feature.properties.sqft+" square feet."
		+"<br> It is under the jurisdiction of "
		+feature.properties.agency+"." 
		)};



//sidebar actions
$("#thousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(to1000)) {
        $(this).removeClass('selected');
        map.removeLayer(to1000);
    } else {
        map.addLayer(to1000);        
        $(this).addClass('selected');
   }
});

$("#twentyFiveHundred").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toTwentyFive)) {
        $(this).removeClass('selected');
        map.removeLayer(toTwentyFive);
    } else {
        map.addLayer(toTwentyFive);        
        $(this).addClass('selected');
   }
});

$("#fiveThousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toFive)) {
        $(this).removeClass('selected');
        map.removeLayer(toFive);
    } else {
        map.addLayer(toFive);        
        $(this).addClass('selected');
   }
});


$("#fiveThousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toFive)) {
        $(this).removeClass('selected');
        map.removeLayer(toFive);
    } else {
        map.addLayer(toFive);        
        $(this).addClass('selected');
   }
});


$("#tenThousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toTen)) {
        $(this).removeClass('selected');
        map.removeLayer(toTen);
    } else {
        map.addLayer(toTen);        
        $(this).addClass('selected');
   }
});


$("#infinity").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toInfinty)) {
        $(this).removeClass('selected');
        map.removeLayer(toInfinty);
    } else {
        map.addLayer(toInfinty);        
        $(this).addClass('selected');
   }
});












//setup leaflet control
// var size1000 = L.layerGroup([to1000]);
// var size2500 = L.layerGroup([toTwentyFive])
// var size5000 = L.layerGroup([toFive]);
// var size10000 = L.layerGroup([toTen]);
// var sizeInfinty = L.layerGroup([toInfinty])

// var overlays = {
// 	"Up to 1000 square feet" : size1000,
// 	"1001 to 2500 square feet": size2500,
// 	"2501 to 5000 square feet": size5000,
// 	"5001 to 10000 square feet": size10000,
// 	"More than 10000 square feet": sizeInfinty
// };

// layerControl = L.control.layers(null, overlays, {
// 	position: 'bottomright',
// 	collapsed: false
// });


// layerControl.addTo(map);

