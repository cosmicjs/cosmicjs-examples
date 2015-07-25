/* jQuery init
==================================================== */
$(function(){

  var tryingGoogle = setInterval(function(){
  
    $.ajax({
      url : 'https://maps.googleapis.com/maps/api/geocode/json?address=' + $('#venueinfo').data('address')
    }).success(function(data){
      
      google.maps.event.addDomListener(window, 'load', initialize(data));
      if(data.results[0]){
        clearInterval(tryingGoogle);
      }
    });

  }, 1000);

});

/* jQuery on scroll
==================================================== */
$(window).on('scroll', function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

/* Functions
==================================================== */
function initialize(data) {

  var lat = data.results[0].geometry.location.lat;
  var lng = data.results[0].geometry.location.lng;
  
  var venue = new google.maps.LatLng(lat,lng);
  var center = new google.maps.LatLng(lat,lng);

  var myOptions = {
      zoom: 16,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 17
          }]
      }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 20
          }]
      }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 17
          }]
      }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 29
          }, {
              "weight": 0.2
          }]
      }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 18
          }]
      }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 16
          }]
      }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 21
          }]
      }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "visibility": "on"
          }, {
              "color": "#000000"
          }, {
              "lightness": 16
          }]
      }, {
          "elementType": "labels.text.fill",
          "stylers": [{
              "saturation": 36
          }, {
              "color": "#000000"
          }, {
              "lightness": 40
          }]
      }, {
          "elementType": "labels.icon",
          "stylers": [{
              "visibility": "off"
          }]
      }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 19
          }]
      }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 20
          }]
      }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 17
          }, {
              "weight": 1.2
          }]
      }]
  };
  if (!$('html').hasClass('no-touch')){
    myOptions.draggable = false;
  }
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  
  var marker1 = new google.maps.Marker({
      position: venue,
      map: map
  });
  
  /// set icon relative path here
  var icon = 'img/marker.png';
  
  // Set info box 1
  marker1.setIcon(icon);

  // Add info
  var venuinfo = $('#venueinfo').html();
  
  var boxText = document.createElement("div");
        boxText.innerHTML = '<div class="info-box"><div class="arrow-right"></div><div id="infoBox">' + venuinfo + '</div></div>';
    
  var myOptions = {
     content: boxText
    ,disableAutoPan: false
    ,maxWidth: 0
    ,pixelOffset: new google.maps.Size(-393, -127)
    ,zIndex: null
    ,boxStyle: { 
      opacity: 0.75
      ,width: "auto"
     }
    ,closeBoxMargin: "10px 2px 2px 2px"
    ,closeBoxURL: ""
    ,infoBoxClearance: new google.maps.Size(1, 1)
    ,isHidden: false
    ,pane: "floatPane"
    ,enableEventPropagation: false
  };

  var ib = new InfoBox(myOptions);
  
  ib.open(map, marker1);
}
