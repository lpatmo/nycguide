 $(document).ready(function(){
    $.getJSON("http://api.meetup.com/2/open_events.json?zip=10001&radius=7&topic=technology&status=upcoming&time=,1w&key=82c3111664b49681a1755d782e442a&callback=?", 
function (data) {
    var htmlString = "";
    $.each(data.results, function (i, item) {
         if (item.venue) {
            var time = item.time;
            var date = moment(time).format('dddd, MMMM Do YYYY [at] ha');
        htmlString += '<span class="upcoming-block"><a href="' + item.event_url + '" target="_blank">' + item.name + '<span class="event-time">' + date + '</span></a>' + '</span>';
      //  var address_1 = item.venue['address_1'];
      // var venuetesting = item.venue;
      // console.log(venuetesting["id"]);
      //  console.log(item.venue["address_1"]);
        }
      
    });
    
    $('#upcoming').html(htmlString);});
    });