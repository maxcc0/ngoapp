export function fetchAddress(lat, lng, cb) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                console.log(results[1]);
                cb(null, results[1].formatted_address)
            } else {
                cb(null, '')
            }
        } else {
            cb('Geocoder failed due to: ' + status, '')
        }
    });
}

export function getGeoLocation(cb) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (location) {
      cb(null, location);
    });
  } else {
    cb('not supported');
    alert('Geolocation is not supported in your browser');
  }

}

