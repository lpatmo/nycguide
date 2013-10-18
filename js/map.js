var colorPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
  var green = colorPrefix + 'green-dot.png';
  var blue = colorPrefix + 'blue-dot.png';
  var red = colorPrefix + 'red-dot.png';

var content = [
  ['<h3>Alley NYC</h3>' + '<p>Co-working space / event venue</p>'],
  ['<h3>General Assembly</h3>' + '<p>Tech education space</p>'],
  ['<h3>Trader Joe\'s</h3>' + '<p>Organic food at low prices</p>']
]

var places = [
      ['Alley NYC', 40.753694, -73.989082, green, content[0]],
      ['General Assembly', 40.740575, -73.990112, blue, content[1]],
      ['Trader Joe\'s in Brooklyn', 40.690271, -73.992669, red, content[2]]
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
