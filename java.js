$(document).ready(function(){
    $("button").click(function(){
      var div = $("h1");  
      
      div.animate({fontSize: '80px'}, "slow");
      div.animate({fontSize: '60px'}, "slow");
      $("h1").css("color", "aquamarine");
      $(".pic").css("border" , ' 6px solid aquamarine');
      
    });
  });
 