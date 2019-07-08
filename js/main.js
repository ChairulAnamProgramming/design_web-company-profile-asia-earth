$(document).ready(function(){

  let showNav = false;

  $(".burger").on('click',()=>{

    if (!showNav) {
      $('.navigation').addClass('active');
      $('.nav-item li').addClass('active');
      $('.nav-item').addClass('active');
      $('.burger .line-burger').addClass('active');
      showNav= true;
    }else{
      $('.navigation').removeClass('active');
      $('.nav-item li').removeClass('active');
      $('.nav-item').removeClass('active');
      $('.burger .line-burger').removeClass('active');
      showNav= false;
    }

  });

});
