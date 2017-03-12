function initMap() {

    var myLatLng = {lat: 50.618641, lng: 26.258646};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Адреса:</h4>'+
      '<div id="bodyContent">'+
      '<h6>вул.Патріса Лумумбы, 87</h6>'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Телефони:</h4>'+
      '<div id="bodyContent">'+
      '<h6>099 221 71 73</h6>'+
      '<h6>063 556 66 44</h6>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ' '
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

infowindow.open(map,marker);
}

function hover(element) {
    element.setAttribute('src', 'img/ashot.jpg');
}
function unhover(element) {element.setAttribute('src', 'img/elena.jpg');
}

function hover1(element) {
    element.setAttribute('src', 'img/ashot2.jpg');
}
function unhover1(element) {
    element.setAttribute('src', 'img/elena.jpg');
}

function hover2(element) {
    element.setAttribute('src', 'img/ashot3.jpg');
}
function unhover2(element) {
    element.setAttribute('src', 'img/elena.jpg');
}

