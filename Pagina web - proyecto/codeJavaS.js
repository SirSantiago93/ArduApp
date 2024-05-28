$(document).ready(function(){
    $(".logo").hover(function(){
        $(this).css("background-color","#575757").css("borderRadius","4px")
    }, function(){
        $(this).css("background-color","").css("borderRadius","")
    })
})