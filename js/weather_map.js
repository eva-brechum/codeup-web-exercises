"use strict";
$(document).ready(function(){




    //


    //
    // $.get("api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_KEY,
    //     lat: 29.7604,
    //     lon: -95.3698
    // })



    // Make API Call
    $.get("https://api.openweathermap.org/data/2.5/weather", {
                APPID: OPEN_WEATHER_KEY,
                lat: 29.7604,
            lon: -95.3698,
        units: "imperial"
        }).done(function(data) {
        console.log("5 day forecast", data);
        //to input weather icons//

        $("#weather_icon").attr("src", "http://openweathermap.org/img/w/04n.png")
            // + data.daily[0].weather[0].icon + "png");
        $("#weather_icon2").attr("src", " http://openweathermap.org/img/w/02d.png")
        // console.log(new Date(data.daily[0].dt * 1000));
    })


    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-95.3698, 29.7604], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    var houstonMarker= new mapboxgl.Marker()
        .setLngLat([-95.3698, 29.7604])
        .setDraggable(true)
        .addTo(map);

    // var placeMarker = new mapboxgl.Marker({
    //     draggable:true
    // })
    // placeMarker
    //     .setLngLat([lon, lat])
    //     .addTo(map);
// WHEN THE USER CLICKS THE FIND BUTTON, THE MARKER WILL HIGHLIGHT THE USER CURRENT CITY
    $("#find").click(function(e){
        e.preventDefault();
    })

     houstonMarker.on("dragend", function () {
         $("")
     })

});