// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require activestorage
//= require vendor.min
//= require vendor/jquery.accordion
//= require vendor/jquery.selectric
//= require vendor/modernizr
//= require vendor/prism
//= require assets/app
//= require_tree .

$(document).ready(function() {
  
  var scrollLink = $('.scroll-smooth');
  var scrollLinkFast = $('.scroll-smooth-fast');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 2000 );
  });

  // Smooth scrolling - Fast
  scrollLinkFast.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
})

// Alert fading
window.setTimeout(function () {
  $(".alert").fadeTo(500, 0).slideUp(500, function () {
    $(this).remove();
  });
}, 5000);