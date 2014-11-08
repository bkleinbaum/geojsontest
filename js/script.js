var map = L.map('map');
map.fitBounds([[40.681339, -73.96302],
	[40.712437, -74.008423]]);


L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


function popUp(feature, layer) {
  layer.bindPopup(feature.properties.name);
}

var to1000 = new L.GeoJSON.AJAX("/js/0-1000.geojson", {onEachFeature:makeMarkers
});
// to1000.addTo(map);

// function make0to1000Markers(feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency)
// };


// var toTwentyFive = new L.GeoJSON.AJAX("/js/1000-2500.geojson", {onEachFeature:makeMarkers2500
// });
// toTwentyFive.addTo(map);

// function makeMarkers2500 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};


var toFive = new L.GeoJSON.AJAX("/js/2500-5000.geojson", {onEachFeature:makeMarkers
});
// toFive.addTo(map);

// function makeMarkers5000 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};


var toTen = new L.GeoJSON.AJAX("/js/5000-10000.geojson", {onEachFeature:makeMarkers
});
// toTen.addTo(map);

// function makeMarkers10000 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};

var toInfinty = new L.GeoJSON.AJAX("/js/10000.geojson", {onEachFeature:makeMarkers
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
		"This lot is "
		+feature.properties.sqft+" square feet."
		+"<br> It is under the jurisdiction of "
		+feature.properties.agency+"." 
		)};



var size1000 = L.layerGroup([to1000]);
var size5000 = L.layerGroup([toFive]);
var size10000 = L.layerGroup([toTen]);
var sizeInfinty = L.layerGroup([toInfinty])

var overlays = {
	"Up to 1000 square feet" : size1000,
	"2501 to 5000 square feet": size5000,
	"5001 to 10000 square feet": size10000,
	"More than 10000 square feet": sizeInfinty
};

layerControl = L.control.layers(null, overlays, {
	position: 'bottomright',
	collapsed: false
});


layerControl.addTo(map);

