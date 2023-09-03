
$(".open-close-item1").click(function(){

    $(".SideNav").css("left" , "-256px");
})


$(".open-close-item").click(function(){


    $(".open-close-item").removeClass('fa-x').addClass('fa-align-justify')

});


$(".open-close-item1").click(function(){



    $(".open-close-item1").removeClass("fa-align-justify").addClass("fa-x");

})
$(".open-close-item").click(function(){

    $(".SideNav").css("left" , "0px");
})

