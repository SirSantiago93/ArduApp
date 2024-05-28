
/*
$(document).ready(function(){
    $('p').click(function(){
        $('p').fadeOut(2000)
    })
    $('button').click(function(){
        $('p').fadeIn(2000)
    })
})
*/

/*
function ocultar(){
    let p = document.getElementsByTagName('p')
    p[0].style="display:none"
    $('p').fadeToggle()
}
*/

$(document).ready(function(){
    $('#b3').click(function(){
        $(".rojo").css("background-color","red").animate({borderRadius:"10px"}, 1000).css("color","white")
        $(".azul").css("background-color","blue").animate({borderRadius:"10px"}, 1000).css("color","white")
        
        //let t = $("#i1").val();
        //$('div').html(t); <input type="radio">
        //$("div").text(t);

        let d2 = $("#d2").html()
        $("#d1").html(d2)


    })

    $('button').click(function(){
        $('p').show(1000)
    })

    $('button').dblclick(function(){
        $('p').hide(1000)
    })
})