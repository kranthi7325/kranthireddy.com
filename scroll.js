/* -----------------------------------------landing page text effect to fade out when scrolled--------------------*/


$("#indexname").next().height($("#indexname").height())
$(window).scroll(function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        $('p').css('opacity',0);
    }
    else {
        $('p').css('opacity',1-scrollTop/100);
    }
}).scroll()

