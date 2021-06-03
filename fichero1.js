$('h1').click(function(){
    console.log("Se ha pulsado el titular")
}) 


$('lo').click(function(){
    console.log("Se presionó un elemento de la lista")
})

$(document.getElementById("li1")).click(function(){
    console.log("se ha presionado el elemento 1 de la lista")
})

$(document.getElementById("li2")).click(function(){
    console.log("se ha presionado el elemento 2 de la lista")
})

$(document.getElementById("li3")).click(function(){
    console.log("se ha presionado el elemento 3 de la lista")
})

$('input').eq(0).keypress(function(){
    $(this).css('color','red')
})

$('input').eq(0).keypress(function(){
    $(this).css('color','red')
    console.log(event)
    if (event.which === 100){
        $(this).css('color','green')
    }
})

$(document.getElementById("li1")).click(function(){
    $('#id1').fadeOut(2000)
})
$(document.getElementById("li2")).click(function(){
    $('#id1').slideUp(2000)
})

