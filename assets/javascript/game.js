$(document).ready(function(){

    var wins = 0;
    var loss = 0;
    var slectedNumber = 0;

    // selectedNumber is random number picked in the beginning to match.
    var selectedNumber = Math.floor(Math.random() * 101) + 19;
    $("#points").text(selectedNumber);

    // each gem is assign random value between 1-12 in the beginning. and given an a attribut value.
    var gem1 = Math.floor(Math.random() * 12) + 1;
    $("#gem1").attr("minValue", gem1);
    console.log(gem1);

    var gem2 = Math.floor(Math.random() * 12) + 1;
    $("#gem2").attr("minValue", gem2);
    console.log(gem2);

    var gem3 = Math.floor(Math.random() * 12) + 1;
    $("#gem3").attr("minValue", gem3);
    console.log(gem3);

    var gem4 = Math.floor(Math.random() * 12) + 1:
    $("#gem4").attr("minValue", gem4);
    console.log(gem4);


    







});