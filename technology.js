$("#one").click(function(){
    $(".vehicle").show();
    $(".spacecapsule").hide();
    $(".spaceport").hide();
    $("#one").css({"background":"white","color":"black"});
    $("#two").css({"background":"none","color":"white"}); 
    $("#three").css({"background":"none","color":"white"}); 
});

$("#two").click(function(){
    $(".vehicle").hide();
    $(".spacecapsule").hide();
    $(".spaceport").show();
    $("#two").css({"background":"white","color":"black"});
    $("#one").css({"background":"none","color":"white"}); 
    $("#three").css({"background":"none","color":"white"}); 
});

$("#three").click(function(){
    $(".vehicle").hide();
    $(".spacecapsule").show();
    $(".spaceport").hide();
    $("#three").css({"background":"white","color":"black"});
    $("#two").css({"background":"none","color":"white"}); 
    $("#one").css({"background":"none","color":"white"}); 
});
