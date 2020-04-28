$(document).ready(function() {

    $("#1").click(function(){
         
        $("body").css("background-image","url('img/lightblue.jpg')");
        
      });
      $("#2").click(function(){
       
        $("body").css("background-image","url('img/lightgold.jpg')");
        
      });
      if(navigator.serviceWorker) {
        window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('/serviceworker.js')
        .then(reg => console.log("work"))
        .catch(err => console.log("no"))
        })  }
              
          });
    


  
