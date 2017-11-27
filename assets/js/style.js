$(document).ready(function(){
  /* Smooth Scrolling */
  $("#smoothscroll a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }  
  });
});

/* scrollTop, offset, addClass, removeClass used to make sticky navbar */
/* jQuery Function Number 1,2,3,4 */
$(function() {
  var distance = $(".navbar").offset().top;

  $(window).scroll(function() {
      if ($(window).scrollTop() >= distance) {
        $(".navbar").addClass("fixed");
      } else {
        $(".navbar").removeClass("fixed");
      }
})
/* AOS (Animate on Scroll) Plugin activation */
AOS.init({
  duration: 1700,
})
  
});
/* Unite Gallery Plugin theme activation */
jQuery(document).ready(function(){ 
        jQuery("#gallery").unitegallery({
  tile_enable_textpanel:true,
  lightbox_textpanel_enable_description: true,
  tiles_justified_row_height: 250,
  tile_textpanel_bg_opacity:0.4,
  lightbox_overlay_opacity:0.85,
  tile_textpanel_title_text_align: "center",
  tiles_justified_space_between:5,
  tiles_type: "justified",
});
      }); 
/* Click() used to make a div show/hide, Text used to explain Title Headers such as About Me */
/* jQuery Function number 5 */
$(document).ready(function(){
    $("#about-title").click(function(){
        $(".about-explain").toggle("slow");
        $("#about-title").toggleClass("open");
    });
});


