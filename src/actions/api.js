import $ from 'jQuery';

function _makeAjax(type, data, url, cb) {
      $.ajax({

    type: type,
    data: data,
    url: url,
    success: function (response) {
      cb(null, response)
    },
    error: function (jqXHR, exception) {
      var msg = '';
      if (jqXHR.status === 0) {
        msg = 'Connection Failed.\n Verify Network.';
      } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
      } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
      } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
      } else if (exception === 'timeout') {
        msg = 'Time out error.';
      } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
      } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }
      cb(msg)
    }
  })
}
module.exports = {
  createPledge(model, cb) {
 _makeAjax('post', { DATAasdasd: model }, 
      'https://www.socialpixe.com/socialpixe/react/api/myphp.php', cb);
  },
  fetchPickupLocations(origin, dest, cb) {
      _makeAjax('post', { origin: origin, dest: dest }, 
      'https://www.socialpixe.com/socialpixe/react/api/fetchPickups.php', cb);
    },
    assignVoluteer(data, id, cb) {
      _makeAjax('post', { data: data, id:id }, 
      'https://www.socialpixe.com/socialpixe/react/api/assignVolunteer.php', cb);
    },
    login(data, cb) {
      _makeAjax('post', { data: data }, 
      'https://www.socialpixe.com/socialpixe/react/api/login.php', cb);
    },
    fetchDropLocations(cb) {
      _makeAjax('get', { }, 'https://www.socialpixe.com/socialpixe/react/api/droplocations.php', cb);
    },
    updateDonationStatus(donation, cb){
       _makeAjax('post', {data: donation }, 'https://www.socialpixe.com/socialpixe/react/api/updateDonation.php', cb);
    }
}

// module.exports = {
//   createPledge(model, cb) {
//      _makeAjax('post', { DATAasdasd: model }, 
//       'api/myphp.php', cb);
//   },
//   fetchPickupLocations(origin, dest, cb) {
//       _makeAjax('post', { origin: origin, dest: dest }, 
//       'api/fetchPickups.php', cb);
//     },
//     assignVoluteer(data, id, cb) {
//       _makeAjax('post', { data: data, id:id }, 
//       'api/assignVolunteer.php', cb);
//     },
//     login(data, cb) {
//       _makeAjax('post', { data: data }, 
//       'api/login.php', cb);
//     },
//     fetchDropLocations(cb) {
//       _makeAjax('get', { }, 'api/droplocations.php', cb);
//     },
//     updateDonationStatus(donation, cb){
//        _makeAjax('post', {data: donation }, 'api/updateDonation.php', cb);
//     }
// }