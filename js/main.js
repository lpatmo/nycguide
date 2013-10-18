 $(function() {
      var tableOfContents = $('.table-of-contents');
      var stickyTop = $('.table-of-contents').offset().top;
      console.log(stickyTop);

      $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        //console.log(windowTop);
        if (stickyTop < windowTop) {
          tableOfContents.addClass('fixed');
        } else {
          tableOfContents.removeClass('fixed');
        }
      });

    });
