//waits for the dom to load
$(function(){
    console.log("let's party with jQuery");

    //add image-center class to images in the article tag
    $("article img").addClass("image-center");

    //give all images inside an artical tag the class "image center"
    $("article p:last-child").remove();


});

