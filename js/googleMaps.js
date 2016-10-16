function initialize() {
  // Create an array of styles.
  var styles = [
    /* // this re-colors the map
    {
     stylers: [
       { hue: "#00ffe6" },
       { saturation: -20 }
     ]
   },
   */
    /* // this turns off the highlighting of roads
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    */
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];


  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var mapOptions = {
    center: new google.maps.LatLng(50.061636, 19.939091),
    scrollwheel: false,
    zoom: 9,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var mcmike_marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.061636, 19.939091),
    url: 'mcmichael.com',
    icon: {
        url: 'img/church_icon.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,12)
    },
    animation: google.maps.Animation.DROP
  });

  var hotel_marker = new google.maps.Marker({
    position: new google.maps.LatLng(49.940215,19.685524),
    url: '/',
    icon: {
        url: 'img/party.png',
        scaledSize: new google.maps.Size(40, 40),
        anchor: new google.maps.Point(20, -20)
    },
    animation: google.maps.Animation.DROP
  });
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  mcmike_marker.setMap(map);
  hotel_marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
