//waits for the dom to load
$(function(){
    console.log("let's party with jQuery");

    //add image-center class to images in the article tag
    $("article image").addClass("image-center");

    $("article p:last-child").remove();
});

