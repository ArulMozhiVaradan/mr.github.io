$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(".input-effect input").focusout(function(){
    if($(this).val() != ""){
        $(this).addClass("has-content");
    }else{
        $(this).removeClass("has-content");
    }
});
    $(".show_password").hover(function () {
        $('#txtPassword').attr('type', 'text');
    }, function () {
        $('#txtPassword').attr('type', 'password');
    });