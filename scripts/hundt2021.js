// JavaScript Document

$(document).ready(function(){
  console.log('hfh2021');
  
  $('#bannerCarousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true
  });
  
  $('#testimonialCarousel').flickity({
    pageDots: true,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 4000,
    pauseAutoPlayOnHover: true
  });
  $('#blogNav .custom-nav-list').flickity({
    pageDots: true,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 4000,
    pauseAutoPlayOnHover: true
  });
  
  $('#page-footer .mobile-only').on('click',function(){
    
    var myParent = $(this).closest('li');
    var mySubnav = myParent.find('.subnav');
    if ($(this).hasClass('open-footer-nav')) {
      $(this).removeClass('open-footer-nav');
      mySubnav.slideUp();
      $(this).html('+');
    } else {
      $(this).addClass('open-footer-nav');
      mySubnav.slideDown();
      $(this).html('-');
    }
  });
});