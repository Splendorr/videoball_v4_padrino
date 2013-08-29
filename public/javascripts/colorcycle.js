// colorcycle.js

var colorset = 1;

var colorset1player1 = "#E72D01";
var colorset1player2 = "#4280A0";
var colorset1player3 = "#F34300";
var colorset1player4 = "#376C86";
var colorset1darkstripe = "#CBAE87";
var colorset1lightstripe = "#CDB38F"; 
var colorset1courtmarks = "#D9C2A5";
var colorset1sideline = "#D86E0F";
var colorset1gamewhite = "#F0F0F0";
var colorset1gameblack = "#000000"; 

var colorset2player1 = "#000000";
var colorset2player2 = "#1D9663";
var colorset2player3 = "#000000";
var colorset2player4 = "#009374";
var colorset2darkstripe = "#BDBDBD";
var colorset2lightstripe = "#C1C1C1"; 
var colorset2courtmarks = "#CFCFCF";
var colorset2sideline = "#007649";
var colorset2gamewhite = "#F0F0F0";
var colorset2gameblack = "#000000";

$(document).ready(function() {
  
  $('.color-btn').click(function() {
    // if(!ready) return;
    // else toggleSound();
    cycleColor();
  });

});


function cycleColor() {
    if(colorset == 1) {
      $('.colorset-1-player1-bg').animate({ backgroundColor: colorset2player1}, 1500 );
      $('.colorset-1-sideline-bg').animate({ backgroundColor: colorset2sideline}, 1500 );
      $('.colorset-1-light-stripe, .colorset-1-light-stripe a').animate({ color: colorset2lightstripe}, 1500 );
      $('.colorset-1-light-stripe-bg').animate({ backgroundColor: colorset2lightstripe}, 1500 );
      colorset = 2;
    } else if(colorset == 2) {
      $('.colorset-1-player1-bg').animate({ backgroundColor: colorset1player1}, 1500 );
      $('.colorset-1-sideline-bg').animate({ backgroundColor: colorset1sideline}, 1500 );
      $('.colorset-1-light-stripe, .colorset-1-light-stripe a').animate({ color: colorset1lightstripe}, 1500 );
      $('.colorset-1-light-stripe-bg').animate({ backgroundColor: colorset1lightstripe}, 1500 );
      colorset = 1;
    }
}