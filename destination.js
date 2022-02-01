$("#nav-mars").click(function(){
    $("#mars-desc").show();
    $("#moon-desc").hide();
    $("#europa-desc").hide();
    $("#titan-desc").hide();
    $("#nav-mars").css("borderBottom","4px solid white");
    $("#nav-moon").css("borderBottom","none");
    $("#nav-europa").css("borderBottom","none");
    $("#nav-titan").css("borderBottom","none");
});

$("#nav-moon").click(function(){
    $("#moon-desc").show();
    $("#mars-desc").hide();
    $("#europa-desc").hide();
    $("#titan-desc").hide();
    $("#nav-moon").css("borderBottom","4px solid white");
    $("#nav-mars").css("borderBottom","none");
    $("#nav-europa").css("borderBottom","none");
    $("#nav-titan").css("borderBottom","none");
});

$("#nav-europa").click(function(){
    $("#europa-desc").show();
    $("#moon-desc").hide();
    $("#mars-desc").hide();
    $("#titan-desc").hide();
    $("#nav-europa").css("borderBottom","4px solid white");
    $("#nav-moon").css("borderBottom","none");
    $("#nav-mars").css("borderBottom","none");
    $("#nav-titan").css("borderBottom","none");
});

$("#nav-titan").click(function(){
    $("#titan-desc").show();
    $("#moon-desc").hide();
    $("#europa-desc").hide();
    $("#mars-desc").hide();
    $("#nav-titan").css("borderBottom","4px solid white");
    $("#nav-moon").css("borderBottom","none");
    $("#nav-europa").css("borderBottom","none");
    $("#nav-mars").css("borderBottom","none");
});