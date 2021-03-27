// JavaScript Document

$(document).ready(function(){
  console.log('hfh2021');
  const queryString = window.location.search;
  const windowURL = window.location.href;
  const urlParams = new URLSearchParams(queryString);
  const blogCategory = urlParams.get('category');
  console.log({blogCategory});
  console.log({windowURL});
  
  if ( windowURL.includes("blog") && windowURL.includes(""/category") ) {
    console.log('blog category page');
  }
  
  $('#bannerCarousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    adaptiveHeight: false,
    wrapAround: true
  });
  
  $('#testimonialCarousel').flickity({
    pageDots: true,
    prevNextButtons: true,
    wrapAround: true,
    autoPlay: 4000,
    pauseAutoPlayOnHover: true
  });
  $('.custom-nav-list').flickity({
    pageDots: false,
    prevNextButtons: true,
    groupCells: 2,
    contain: true,
    wrapAround: false,
    autoPlay: false,
    pauseAutoPlayOnHover: true
  });
  
  $('#page-footer .mobile-only').on('click',function(){
    
    var myParent = $(this).closest('li');
    var mySubnav = myParent.find('.subnav');
    var clickedElement = $(this);
    
    if ($(this).hasClass('open-footer-nav')) {
      $(this).removeClass('open-footer-nav');
      mySubnav.slideUp();
      $(this).html('+');
    } else {
      if ( myParent.hasClass('.index-2') ) {
        var nextFolder = myParent.next();
        var bonusSubnav = nextFolder.find('.subnav');
        mySubnav.slideDown();
        bonusSubnav.slideDown();
        clickedElement.html('-');
        //
      } else {
        $(this).addClass('open-footer-nav');
        mySubnav.slideDown();
        $(this).html('-');
      }
    }
  });
});