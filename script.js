$(".click").click(function() {
    $(this).css("background-color","orange")

});

$(".dblclick").dblclick(function(){
    $(this).css("background-color","pink")
  });

$(".hover").hover(function() {
    $(this).css("background-color","purple")
},
function(){
    $(this).css("background-color","green")
});
$(".enter").mouseenter(function(){
    $(this).css("background-color","black")
  });

$(".read").click(function(){
    alert("read me")
});



  
$(".hide").click(function(){
    $(this).hide(3000)
});


$(".move").click(function(){
    $(this).animate({ marginTop: "+=250px"}, 1000);
    
});

$(".fill").click(function(){
   $(this).text("goede dag!")
   
});

$(".random").click(function(){
    var randomColor = '#'+ ('00000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    
    $(this).css({'background-color' : randomColor });

    
});
