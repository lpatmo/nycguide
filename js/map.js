 $(document).ready(function(){
  //creates the map, centers it in manhattan
    var map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 13,
      center: new google.maps.LatLng(40.753694,-73.989082),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

  //creates the infowindow
    var infowindow = new google.maps.InfoWindow();

   var promise = $.getJSON("http://api.meetup.com/groups.json/?zip=10001&radius=8&topic=technology&order=members&key=" + apikey + "&callback=?");
    var messagePromise = promise.then(function (data) {
    var htmlString = "";
    
    $.each(data.results, function (i, item) {
        htmlString += '<h3><a href="' + item.link + '" target="_blank">' + item.name + '</a></h3>' + '<p><img src="' + item.photo_url + '" width="200"></p>' + '<p> <strong>Last active:</strong> ' + item.updated + ' (' + item.members + ' members) '  + '</p>' + '<p>' + item.description + '</p>';
        //var marker, i, markerColor;
        var latLng = new google.maps.LatLng(item.lat, item.lon);

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: green
    }); //each

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        var meetupgroup = '<h2><a href="' + item.link + '" target="_blank">' + item.name + '</a></h2>' + '<p> <strong>Last active:</strong> ' + item.updated + ' (' + item.members + ' members) '  + '</p>' + '<p>' + item.description + '</p>' + '<p><a class="btn btn-primary btn-lg" href="' + item.link + '">' + 'Check out the meetup group' + '</a>';
        var meetuplogo = '<a href="' + item.link + '" target="_blank">' + '<img src="' + item.photo_url + '">' + '</a>';
        return function() {
          infowindow.setContent(meetuplogo);
          infowindow.open(map, marker);
          //$('.caption' + i).css('visibility','visible').fadeIn('slow').removeClass('hidden');
         $('#description').hide().html(meetupgroup).fadeIn();
        }
      })(marker, i));

    }); //each 
   //$('#groups').html(htmlString);

  }); //first promise
   
/*Code below is mostly unused now but can be used to change color of markers*/

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


    var descriptions = '';

       for (i = 0; i < places.length; i++) { 
        //console.log(places[i][3]);
      if (places[i][3] === "green") {
        markerColor = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
           } else if (places[i][3] === "blue" ) {
        markerColor = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
           } else {
        markerColor = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Ball-Azure-icon.png';
           }
         };

  }); //end document ready
