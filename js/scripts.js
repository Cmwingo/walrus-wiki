$ (document).ready(function(){
  $ ("#clickable-culture").click(function(){
    $("#culture").toggle();
  });
  $ ("#clickable-migration").click(function(){
    $("#migration").fadeToggle();
  });
  $ ("#clickable-predation").click(function(){
    $("#predation").slideToggle();
  });
});
