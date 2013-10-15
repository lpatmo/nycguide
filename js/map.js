var locations = [
      ['Alley NYC', 40.753694, -73.989082, '<h3>Alley NYC</h3>'],
      ['General Assembly', 40.740575, -73.990112, '<h3>General Assembly</h3>'],
      ['Trader Joe\'s in Brooklyn', 40.690271, -73.992669, 5]
    ];


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(40.753694,-73.989082),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    var descriptions = '';

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        //fillcolor: ''
      });

     // $('#caption-container').append('<div class="hidden caption' + i + '">' + locations[i][3] + '</div>');
     //if I don't want any of the caption-containers to disappear 

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
          //$('.caption' + i).css('visibility','visible').fadeIn('slow').removeClass('hidden');
         $('#description').hide().html(locations[i][3]).fadeIn();
        }
      })(marker, i));

       //descriptions += '<div class="hidden caption' + i + '">' + locations[i][3] + '</div>';
      //var descriptions = locations[i][3];
      console.log(descriptions);
    }

    //$('#caption-container').html(descriptions);
