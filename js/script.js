  $.fn.accordion =function(){
 $(".sechead").click(function(){
   console.log($(this).next());
   $(this).next().slideToggle(300);
   $(".secbody").not($(this).next()).slideUp(300);
   $(".sechead").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
   $(this).find("i").toggleClass("fa-minus");
 })

  }
  $(document).ready(function(){
  $(".sechead").accordion();
  });