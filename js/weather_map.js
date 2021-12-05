"use strict";
$(document).ready(function(){


    // mapboxgl.accessToken = MAPBOX_KEY
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
    //     center: [-95.3698, 29.7604], // starting position [lng, lat]
    //     zoom: 9 // starting zoom
    // });
    //
    // var Houston= new mapboxgl.Marker()
    //     .setLngLat([-95.3698, 29.7604])
    //     .addTo(map);
    //
    // var popup = new mapboxgl.Popup()
    //     .setHTML("<h1>Houston</h1>")
    //     .addTo(map);

    //
    // $.get("api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_KEY,
    //     lat: 29.7604,
    //     lon: -95.3698
    // })

    // $("#find").click(function(){
    // })

    // Make API Call
    $.get("https://api.openweathermap.org/data/2.5/weather", {
                APPID: OPEN_WEATHER_KEY,
                lat: 29.7604,
            lon: -95.3698,
        units: "imperial"
        }).done(function(data) {
        console.log(data);
    })
});