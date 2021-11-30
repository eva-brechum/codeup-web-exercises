$(document).ready(function() {
    $("#moreInfo").click(function () {
        $("dd").toggleClass("invisible")

    });
//    BONUS
//     $("dt").click(function() {
//         $(this).toggleClass("highlight");
//     });
    $("#highlightButton").click(function () {
        $("ul").each(function () {
            $(this).children().eq(3).toggleClass("highlight");
        });
    });
});
