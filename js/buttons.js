$(document).ready(function(){
  $(".buttons").hide();

  $("#buttonMode").click(function(){
    $(".buttons").toggle();
  })

  $("#medium").hide();

  $("#hard").click(function(){
  $("#medium").toggle();
   });

   $("#skeleton").hide();

   $("#medium").click(function(){
   $("#skeleton").toggle();
   setTimeout(function() { $("#skeleton").hide(); }, 3000);
   })


  $('#lancer').click(function() {
  const audio = new Audio("media/splat.mp3");
  audio.play();
    });

  $("#night").hide();

  $("#upgrade").click(function(){
   $("#night, .main").toggle();
   $("#buttonContainer").toggleClass('active');
   });

});

