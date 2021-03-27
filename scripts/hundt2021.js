// JavaScript Document

$(document).ready(function(){
  console.log('hfh2021');
  const queryString = window.location.search;
  const windowURL = window.location.href;
  const urlParams = new URLSearchParams(queryString);
  const blogCategory = urlParams.get('category');
  console.log({blogCategory});
  console.log({windowURL});
  var urlCategory;
  if ( windowURL.includes("blog") ) {
    console.log('blog category page');
    
    if ( windowURL.includes('category/Gluten') ) {
      $( ".custom-nav-link[data-category='Gluten']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Food%20&%20Diet') ) {
      $( ".custom-nav-link[data-category='Food-Diet']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Healthy%20Home') ) {
      $( ".custom-nav-link[data-category='Healthy-Home']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Health%20Tips') ) {
      $( ".custom-nav-link[data-category='Health-Tips']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Lifestyle') ) {
      $( ".custom-nav-link[data-category='Lifestyle']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Lyme%20Disease') ) {
      $( ".custom-nav-link[data-category='Lyme-Disease']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Stem%20Cells') ) {
      $( ".custom-nav-link[data-category='Stem-Cells']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Thyroid') ) {
      $( ".custom-nav-link[data-category='Thyroid']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Weight%20Loss') ) {
      $( ".custom-nav-link[data-category='Weight-Loss']" ).addClass('active-nav-link');
    } else if ( windowURL.includes('category/Blogging%20&%20Biz') ) {
      $( ".custom-nav-link[data-category='Blogging-Biz']" ).addClass('active-nav-link');
    } else {
      $( ".custom-nav-link[data-category='All']" ).addClass('active-nav-link');
    }
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