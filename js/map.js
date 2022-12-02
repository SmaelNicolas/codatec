const createMap = () => {
	mapboxgl.accessToken =
		"pk.eyJ1Ijoibmljb3NtYWVsIiwiYSI6ImNreWQzYWNwOTB2ODYydW1mcjFvcDY1ZjYifQ.AXIIQORuME-mafLfuH9vBg";
	const map = new mapboxgl.Map({
		container: "map", // container ID
		style: "mapbox://styles/mapbox/streets-v12", // style URL
		center: [-64.18536055092385, -31.411169869849147], // starting position [lng, lat]
		zoom: 15, // starting zoom
	});
	new mapboxgl.Marker({ color: "#E3325E" })
		.setLngLat([-64.18536055092385, -31.411169869849147])
		.addTo(map);
};
createMap();
