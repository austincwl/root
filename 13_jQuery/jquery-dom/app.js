//waits for the dom to load
$(function(){
    console.log("let's party with jQuery");

    //add image-center class to images in the article tag
    $("article img").addClass("image-center");

    //give all images inside an artical tag the class "image center"
    $("article p:last-child").remove();

    //random title font size
    $("#title").css("fontSize", Math.random()*100+1);

    //add new list item
    $("ol").append("<li>new last list item</li>");

    //empty the aside and replace it with a paragraph
    $("aside").empty().append("<p>sorry for that list.<p>");

    //set background color with three number at bottom
    $(".form-control").on("change", function(){
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color", `rgb(${red},${green},${blue}`)
    });

    //remove meme when clicked
    $("img").on("click",function(){$("img").remove()});

    /*better way to do above: (only 1 selection)
    $("img").on('click', function (e) {
      $(e.target).remove();
    });
    */
    
});

