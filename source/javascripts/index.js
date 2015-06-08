// scripts for the index page
// index.js (located under the javascript directory)

// the weird syntax at for the function definition is a shortcut for
// $(document).ready (function() {
//  ...
// });
$(function() {
  // 1. SMOOTH SCROLLING
  // css selector tells to select each a element which href attribute starts with #
  // but not with href attribute that contains only the #
  $('a[href*=#]:not([href=#])').click(function() {
    // the first if controls that pathname (i.e. url without domain name) and after having drop the initial
    // / is equal to the pathname rendered by the anchor tag
    // the second if controls that the hostnames are equal
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      // hash returns the portion of the url that is behind the # (the "string")
      // and then attempts to select the DOM element that has an id corresponding to the string
      var target = $(this.hash);
      // checks that the selection has select an object; if not, tries to select an element
      // which has a name attribute equal to the string
      target = (target.length || target.selector == "#top") ? target : $('[name=' + this.hash.slice(1) +']');
      // check first that an element has been selected
      var sTarget = target.length ? target.offset().top : 0;
      if (target.length || target.selector == "#top") {
        // animates to push the div up to the top
        $('html,body').animate({
           // scrollTop: rTarget
           scrollTop: sTarget
        }, 1000);
        // return a false
        return false;
      }
    }
  });
  // 2. SETTING HEIGHT OF A WINDOW TO THE VIEWPORT
  // Set div height to exact window height on page load
  $(".window-height").css("height", $(window).height());
  // 3. NAVBAR TRANSITIONS
  // navbar transition jQuery script
  // a. SHOW SCROLL BAR ON SCROLL DOWN
  /* $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "opacity": "1",
      });
    }
    else {
      $(".navbar").css({
        "opacity": "0",
      });
    }
  });
  // b. SHOW SCROLL BAR ONLY IF FURTHER THAN 200px DOWN
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 200) {
      $(".navbar").slideUp();
    }
    else {
      $(".navbar").slideDown();
    }
  });*/
});
