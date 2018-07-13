//Check off specific to dos by clicking on them
$("ul").on("click", "li",  function(){
    $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Input Event
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //Grab text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>" + todoText + "</li>");
    }
});

//Toggle form with plus button
$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle();
});
