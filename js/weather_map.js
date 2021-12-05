"use strict";
    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-95.3698, 29.7604], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

