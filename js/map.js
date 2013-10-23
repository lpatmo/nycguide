 $(document).ready(function(){

   var promise = $.getJSON("http://api.meetup.com/groups.json/?zip=10001&topic=technology&order=members&key=4c12622256c1e9458457d6542c23&callback=?");

var messagePromise = promise.then(function (data) {
    var htmlString = "";
    $.each(data.results, function (i, item) {
        htmlString += '<h3><a href="' + item.link + '" target="_blank">' + item.name + '</a></h3>' + '<p><img src="' + item.photo_url + '" width="200"></p>' + '<p> <strong>Last active:</strong> ' + item.updated + ' (' + item.members + ' members) '  + '</p>' + '<p>' + item.description + '</p>';
    console.log(item.lat, item.lon);
    }); //each 
    $('#groups').html(htmlString);

  }); //first promise
   


var colorPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
  var green = colorPrefix + 'green-dot.png';
  var blue = colorPrefix + 'blue-dot.png';
  var red = colorPrefix + 'red-dot.png';

var content = [
  ['<img src="http://ww1.prweb.com/prfiles/2013/01/15/10326595/Alley.jpg" alt="alleynyc" width="250">'],
  ['<img src="http://nycguide.herokuapp.com/images/ga1.jpg" alt="generalassembly" width="250">'],
  ['<img src="http://3.bp.blogspot.com/-SPEsSSf5ARU/T4eLzyAh0LI/AAAAAAAAAJ8/JmtNN6or9lY/s1600/2008_9_brooklyntraderjoesshelves.jpg" alt="traderjoebrooklyn" width="250">']
]

var places = [
      ['<h3>Alley NYC</h3>' + '<a class="btn btn-default" href="#alleynyc">Read More</a>', 40.753694, -73.989082, green, content[0]],
      ['<h3>General Assembly</h3>' + '<a class="btn btn-default" href="#generalassembly">Read More</a>', 40.740575, -73.990112, blue, content[1]],
      ['<h3>Trader Joe\'s in Brooklyn</h3>' + '<a class="btn btn-default" href="#traderjoebrooklyn">Read More</a>', 40.690271, -73.992669, red, content[2]]
    ];


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(40.753694,-73.989082),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i, markerColor;

    var descriptions = '';

       for (i = 0; i < places.length; i++) { 
        console.log(places[i][3]);
      if (places[i][3] === "green") {
        markerColor = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
           } else if (places[i][3] === "blue" ) {
        markerColor = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
           } else {
        markerColor = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Ball-Azure-icon.png';
           }
         };

    for (i = 0; i < places.length; i++) { 
      
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(places[i][1], places[i][2]),
        map: map,
        icon: places[i][3]
      });

    

     // $('#caption-container').append('<div class="hidden caption' + i + '">' + places[i][3] + '</div>');
     //if I don't want any of the caption-containers to disappear 

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(places[i][0]);
          infowindow.open(map, marker);
          //$('.caption' + i).css('visibility','visible').fadeIn('slow').removeClass('hidden');
         $('#description').hide().html(places[i][4]).fadeIn();
        }
      })(marker, i));

       //descriptions += '<div class="hidden caption' + i + '">' + places[i][3] + '</div>';
      //var descriptions = places[i][3];
      console.log(descriptions);
    }

    //$('#caption-container').html(descriptions);


google.maps.event.addListener(map, 'tilesloaded', function(){
    document.getElementById('map').style.position = 'static';
});



    /**Sticky the map to the top of the window after it appears**/
/*
    $(function() {
      var mapContainer = $('#map-container');
      var stickyTop = $('#map-container').offset().top;
      console.log(stickyTop);

      $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        //console.log(windowTop);
        if (stickyTop < windowTop) {
          mapContainer.addClass('fixed');
        } else {
          mapContainer.removeClass('fixed');
        }
      });

    });*/


  }); //end document ready
