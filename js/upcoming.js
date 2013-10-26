 $(document).ready(function(){
    $.getJSON("http://api.meetup.com/2/open_events.json?zip=10001&radius=7&topic=technology&status=upcoming&time=,1w&key=82c3111664b49681a1755d782e442a&callback=?", 
function (data) {
    var htmlString = "";
    $.each(data.results, function (i, item) {
        htmlString += '<h3><a href="' + item.event_url + '" target="_blank">' + item.name + '</a></h3>' + '<p>' + item.id + '</p>';
    });
    $('#upcoming').html(htmlString);});

    });