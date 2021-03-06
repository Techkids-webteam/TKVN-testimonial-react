$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});

$(window).scroll(function(event) {

    // height of the document (total height)
    var d = $(document).height();

    // height of the window (visible page)
    var w = $(window).height();

    // scroll level
    var s = $(this).scrollTop();

    // bottom bound - or the width of your 'big footer'
    var bottomBound = 400;

    var width = $(window).width();
    var height = $(window).height();
    // if ((width <= 1023) && (height >= 768)) {
    //     alert('Do things');
    // } else {
    //     alert('Do nothing');
    // }

    // are we beneath the bottom bound?
    if(d - (w + s) < bottomBound) {
        // if yes, start scrolling our own way, which is the
        // bottom bound minus where we are in the page
        $('.sticky_bottom_footer .container').css({
            bottom: bottomBound - (d - (w + s))
        });
    } else {
        // if we're beneath the bottom bound, then anchor ourselves
        // to the bottom of the page in traditional footer style
        $('.sticky_bottom_footer .container').css({
            bottom: 0
        });
    }

});

$(document).ready(function(){
	$("#close").click(function(){
		$("#fade-out").fadeOut(800);
	});
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fade').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window < bottom_of_object){
                $(this).animate({'opacity':'1'},1000);
                $(this).removeClass('fade');
            }
        });
    });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fade-in').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},1000);
                $(this).removeClass('fade-in');
            }
        });
    });
});
