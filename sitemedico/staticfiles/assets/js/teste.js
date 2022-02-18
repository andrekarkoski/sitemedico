
$(window).scroll(function () {
      var topWindow = $(this).scrollTop();

        if (topWindow > 70 ) {
            $('nav').addClass('nav-cor');
            $('.logo').addClass('nav-logo');
 } else{
            $('nav').removeClass('nav-cor');
            $('.logo').removeClass('nav-logo');
 }

  });
