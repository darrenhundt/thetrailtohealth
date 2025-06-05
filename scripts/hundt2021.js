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

  $('#bannerCarousel.actual-carousel').flickity({
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
    autoPlay: false,
    pauseAutoPlayOnHover: true
  });

  // Initialize podcast navigation carousel
  var $podcastNav = $('.custom-nav-list').flickity({
    pageDots: false,
    prevNextButtons: true,
    groupCells: window.innerWidth < 920 ? 1 : 3,
    contain: true,
    wrapAround: false,
    autoPlay: false,
    cellAlign: 'center',
    pauseAutoPlayOnHover: true
  });

  // Update groupCells on window resize
  $(window).on('resize', function() {
    var $carousel = $('.custom-nav-list').data('flickity');
    if ($carousel) {
      $carousel.options.groupCells = window.innerWidth < 920 ? 1 : 3;
      $carousel.reposition();
    }
  });

  // Handle podcast navigation highlighting and carousel positioning
  if (windowURL.includes('/podcast')) {
    var currentUrl = windowURL.toLowerCase();
    var foundMatch = false;
    
    // Remove active classes from all links
    $('#blogNav .custom-nav-link').removeClass('active-nav-link');
    
    // Find and highlight the matching link
    $('#blogNav .custom-nav-link').each(function() {
      var linkHref = $(this).attr('href');
      if (!linkHref) return;
      
      // Get the category from the data attribute and trim any extra spaces
      var category = $(this).attr('data-category').trim();
      
      // For the main podcast page
      if (linkHref === '/podcast' && !currentUrl.includes('category=') && !currentUrl.includes('/category/')) {
        $(this).addClass('active-nav-link');
        foundMatch = true;
        return false;
      }
      
      // Extract category from URL - handle both formats
      var categoryInUrl = '';
      if (currentUrl.includes('category=')) {
        // Handle query parameter format: ?category=Gut%20Health
        var queryString = currentUrl.split('?')[1];
        var params = new URLSearchParams(queryString);
        categoryInUrl = decodeURIComponent(params.get('category') || '').trim();
      } else if (currentUrl.includes('/category/')) {
        // Handle path format: /category/Gut%20Health
        categoryInUrl = decodeURIComponent(currentUrl.split('/category/')[1] || '').trim();
      }
      
      // Compare categories
      if (categoryInUrl && categoryInUrl.toLowerCase() === category.toLowerCase()) {
        $(this).addClass('active-nav-link');
        // Update the hidden heading with the current category
        var categoryText = $(this).text().trim();
        $('.main-content .hidden-heading').addClass('touched-heading').text(categoryText);
        foundMatch = true;
        return false;
      }
    });
    
    // If no match found, highlight "All Episodes" and keep heading as is
    if (!foundMatch) {
      $('#blogNav a[data-category="All-Episodes"]').addClass('active-nav-link');
    }

    // After Flickity is initialized, select the active cell
    $podcastNav.on('ready.flickity', function() {
      var $activeLink = $('#blogNav .custom-nav-link.active-nav-link');
      if ($activeLink.length) {
        var activeIndex = $activeLink.parent().index();
        $podcastNav.flickity('select', activeIndex);
      }
    });
  }

  $("#blogNav").addClass("carousel-loaded");

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
      } else {
        $(this).addClass('open-footer-nav');
        mySubnav.slideDown();
        $(this).html('-');
      }
    }
  });
});
