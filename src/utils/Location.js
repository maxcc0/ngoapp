export function fetchAddress(lat, lng, cb) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            //console.log(results)
            if (results[1]) {
                //console.log(results[1]);
                cb(null, results[1].formatted_address)
            } else {
                cb(null, 'Some Random Address')
            }
        } else {
            alert('Geolocation is not supported in your browser');
            cb('Geocoder failed due to: ' + status, '')
        }
    });
}

// export function getGeoLocationV1(cb) {
//    let geoTimeout = '5000';
//    console.log('getting locaion')
// //    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
// //        console.log(navigator)
// //     return getGeoLocationMobile(cb)
// // }
//  function error (err) {
//    alert(err && err.message);
//     return cb(err);
//         }
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (location) {
//       cb(null, location);
//     }, error, {
//         enableHighAccuracy: false,
//         timeout : geoTimeout,
//         maximumAge: 0
//        });
//   } else {
//     alert('Geolocation is not supported in your browser');
//     return cb('not supported');
//   }
// }

export function getGeoLocation(cb) {

    if (geoPosition.init()) {  // Geolocation Initialisation
        geoPosition.getCurrentPosition(success_callback, error_callback, {enableHighAccuracy:true});
    } else {
        alert('Geolocation is not supported in your browser');
        return cb('not supported');
    }

    function success_callback(location) {
        //console.log(location);
        return cb(null, location);
    }

    function error_callback(err) {
        //alert(err && err.message);
        return cb(err);
    }
}
// export function getGeoLocationv4(cb) {


//     if(geo_position_js.init()){ 
//         geo_position_js.getCurrentPosition(success_callback,error_callback); } else{ 
//             alert('Geolocation is not supported in your browser');
//     return cb('not supported');}
//                 function success_callback(location){
//         return cb(null, location);
//     }

//     function error_callback(location){
//        alert(err && err.message);
//         return cb(err);
//     }
// }
export function fetchCoords(address, cb) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address, componentRestrictions: {
        country: 'IN'
    } }, function(results, status) {
        console.log(results);
        return cb(null, results);
        // $.each(results, function(index, value){
        //     addresses[index] = {"lat":value.geometry.location.$a,"lng":value.geometry.location.ab}
        // })
    });
}



