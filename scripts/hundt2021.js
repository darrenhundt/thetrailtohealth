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
  $('#page-footer .mobile-only').on('click',function(){
    var myParent = $(this).closest('li');
    var mySubnav - myParent.find('.subnav');
    mySubnav.slideDown();
  });
});