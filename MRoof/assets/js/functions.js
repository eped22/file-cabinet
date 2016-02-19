(function() {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
  })
})();

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
	
//Content box fadeRight
	var wScroll = $(this).scrollTop();
  if (wScroll > $('.main-boxer').offset().top - ($(window).height() / 1.1)) {
		
		$('.main-boxer').each(function(i){
			
			setTimeout(function(){
				$('.main-boxer').eq(i).addClass("slideInRight");
			}, 150 * (i+1));
		});
  }
	
//Text box fadeLeft
  var wScroll = $(this).scrollTop();
  if (wScroll > $('.home').offset().top - ($(window).height() / 1.5)) {
    $(".home").addClass("fadeInLeft");
  }
	
// White bottom box fadeLeft
  var wScroll = $(this).scrollTop();
  if (wScroll > $('.white').offset().top - ($(window).height() / 1.1)) {
		
		$('.white').each(function(i){
			
			setTimeout(function(){
				$('.white').eq(i).addClass("fadeInLeft");
			}, 150 * (i+1));
		});
  }
	
//Grey bottom box fadeDown
	var wScroll = $(this).scrollTop();
  if (wScroll > $('.grey').offset().top - ($(window).height() / 1.1)) {
		
		$('.grey').each(function(i){
			
			setTimeout(function(){
				$('.grey').eq(i).addClass("fadeInDown");
			}, 150 * (i+1));
		});
  }
});