$(document).ready(function(){
    if(device.mobile()){
        $(".pogoSlider").css("width", "100%");
        $("#decver").css("display", "none");
        $("#mobver").attr("class", "col-12");
    }
})