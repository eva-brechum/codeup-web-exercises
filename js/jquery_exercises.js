"use strict";

//
// var contents = $('#paragraph1').html();
// alert(contents);


// $('.codeup').css("border", "1px solid red");

// $("li").css("font-size", "20px");

// $("h1").css("background-color", "gold");
//
// $("p").css("background-color", "blue");
//
// $("li").css("background-color", "grey");

$("h1").click(function(){
    $(this).css("background-color", "limegreen");
})

$('p').dblclick(function(){
    $(this).css("font-size", "18px");
})

$('li').hover(function(){
    $(this).css("color", "red");
})

$('li').mouseleave(function(){
    $(this).css("color", "black");
})
