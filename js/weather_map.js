"use strict";
$(document).ready(function(){

    let request = {
        lat: 29.7604,
        lon: -95.3698,
        exclude: ["munitely", "hourly"],
        units: "imperial",
        lang: "en",
    }

    function handleWeatherAPI () {
// ask API for data

        // Make API Call for weather info
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: request.lat,
            lon: request.lon,
            exclude:
                request.exclude.join(","),
            units: request.units,
            lang: request.lang,
        }).done(function (data) {
            var date = new Date (data.current.dt * 1000)
            $("#current-day").text("Today is " + date.toLocaleDateString())
            $("#forecast-icon").attr( 'src', `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`)
            // $("#forecast-temperature").attr(${day.temp.morn})
            console.log(data)
        })
    }
    handleWeatherAPI();
        //to input weather icons//


    //         // + data.daily[0].weather[0].icon + "png");
    //     // $("#forecast-icon").attr("src", " http://openweathermap.org/img/w/02d.png")
    //     // // console.log(new Date(data.daily[0].dt * 1000));
    // })


    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-95.3698, 29.7604], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    var Marker= new mapboxgl.Marker()
        .setLngLat({lng:request.lon, lat:request.lat})
        .setDraggable(true);
        Marker.addTo(map);

    //
    // placeMarker.on("dragend",function(){
    // console.log();
    // })
    //
    // var Marker = new mapboxgl.Marker({
        // draggable:true


// WHEN THE USER CLICKS THE FIND BUTTON, THE MARKER WILL HIGHLIGHT THE USER CURRENT CITY
//     $("#find").click(function(e){
//         e.preventDefault();
//         var
//     })
//
//      houstonMarker.on("dragend", function () {
//          $("")
//      })

});