$(function () { 
//    $("#navContainerSecondary").css("visibility","hidden");
//    $("#navContainerSecondary").html("test");

    $("#navBarPrimary li")
        .bind(
            "mouseover",
            function () {
                $("#navContainerSecondary").css("visibility","visible");
            }
        )
        .bind(
            "mouseout",
            function () {
                $("#navContainerSecondary").css("visibility","hidden");
            }
        );

    

})