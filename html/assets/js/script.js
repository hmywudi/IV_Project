mapboxgl.accessToken =
  "pk.eyJ1IjoieWl6aGFvaCIsImEiOiJjbDhyNmI0eGswa2ZjM3dtdHV4bWp4bXhkIn0.JwdAL0PMlgv4AM5P-mdn8Q"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([144.98, -37.84])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([144.98, -37.84]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map
  
  const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: '      Search for places in Melbourne', // Placeholder text for the search bar
    bbox: [144.51617,-37.44478, 145.32487,-38.08123], // Boundary for Berkeley
    proximity: {
      longitude: 144.98,
      latitude: -37.84
    } // Coordinates of Melbounre
  });
    
  // Add the control to the map.
  map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: '     Search for places in Melbourne  ', // Placeholder text for the search bar
      proximity: {
        longitude: 144.98,
        latitude: -37.84
      } // Coordinates of Melbounre
    })
  );

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
