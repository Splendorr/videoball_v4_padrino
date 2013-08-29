var timeoutID;

$(document).ready(function() {

  setVisible();
  delayedSlide();

});

function delayedSlide() {
  timeoutID = window.setTimeout(slideLogoIn, 800);
}

function setVisible() {
  $('.slide-in').css('display', 'inline');
}

function slideLogoIn() {
  $('.slide-in').animate({
    'left': '0px'
  }, 800);
}