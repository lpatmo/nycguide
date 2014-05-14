 $(document).ready(function(){
    var promise = $.getJSON("http://api.meetup.com/2/open_events.json?zip=10001&radius=7&topic=technology&status=upcoming&time=,1w&key=82c3111664b49681a1755d782e442a&callback=?"); 

    promise.done(function (data) {
    var htmlString = "";
    $.each(data.results, function (i, item) {
         if (item.venue && item.description) {
            var time = item.time;
            var date = moment(time).format('dddd, MMMM Do YYYY [at] ha');


        htmlString += '<div class="upcoming-block" id="' + i +'""><a class="expand"' + 'href='+ item.event_url + ' target="_blank">' + '<i class="fa fa-calendar"></i> ' + item.name + '</a>' + '<span class="event-time">' + date + '</span>' + '</span><span class="description custom-hide">' + '<a href="' + item.event_url + '"class="btn btn-meetup">RSVP on meetup.com</a> <hr />' + item.description + '</span>' + '</div>';
      //  var address_1 = item.venue['address_1'];
      // var venuetesting = item.venue;
      // console.log(venuetesting["id"]);
      //  console.log(item.venue["address_1"]);
    
      $('body').on('click', 'div#'+i, function(e) {
         alert($(this));
          e.preventDefault();
          
         $(this).find('span.description').toggleClass('custom-hide');
         
           //$('.upcoming-block:hover').css({'background': 'none', 'color': '#aaa'}); 
           //$('.upcoming-block:hover a').css({'color': '#aaa'}); 
       });

   

        }    //end if

    }); //end each


    
    $('#upcoming').html(htmlString);
       $('.upcoming-block').hide().first().show("fast", function showNext() {
            $(this).next(".upcoming-block").show("medium", showNext);
          }); //animation
  }); //end promise


  }); //end document ready

