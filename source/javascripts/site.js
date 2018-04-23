// sticky headers

$(window).scroll(function() {
    if ($(this).scrollTop() > 15){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
