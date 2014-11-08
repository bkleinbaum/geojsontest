var map = L.map('map');
map.fitBounds([[40.681339, -73.96302],
	[40.712437, -74.008423]]);


L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


function makeMarkers(feature,layer) {
	layer.bindPopup(
		feature.properties.Address
		+"<br> The Zoning is "
		+feature.properties.AllZoning1), 
		$('#bottombar').append(feature.properties.AllZoning1);
};



$.getJSON('/js/cityown.geojson', function (data) {
	L.geoJson(data.features, {
	onEachFeature: makeMarkers
	}).addTo(map);

});

	