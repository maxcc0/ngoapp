import $ from 'jQuery';

function _makeAjax(type, data, url, cb) {
      $.ajax({

    type: type,
    data: data,
    cache: false,
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
      }else if (jqXHR.status == 412) {
        msg = 'Review data and re-submit. ' + jqXHR.responseText;
      }  else if (jqXHR.status == 500) {
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

const baseUrl = 'https://www.socialpixe.com/socialpixe/react/';

module.exports = {
    signup(model, cb) {
     _makeAjax('post', { DATAasdasd: model }, 
      baseUrl + 'api/signup.php', cb);
  },
  createPledge(model, cb) {
 _makeAjax('post', { DATAasdasd: model }, 
      baseUrl +'api/myphp.php', cb);
  },
  fetchPickupLocations(origin, dest, cb) {
      _makeAjax('post', { origin: origin, dest: dest }, 
      baseUrl + 'api/fetchPickups.php', cb);
    },
    fetchAllPledges(cb){
       _makeAjax('get', {}, baseUrl + 'api/alldonations.php', cb);
     },

    fetchUsers(cb){
       _makeAjax('get', {}, baseUrl + 'api/fetchusers.php', cb);
     },
    login(data, cb) {
      _makeAjax('post', { data: data }, 
      baseUrl + 'api/login.php', cb);
    },
    logout(cb) {
      _makeAjax('post', {}, 
      baseUrl + 'api/logout.php', cb);
    },
    fetchDropLocations(cb) {
      _makeAjax('get', { }, baseUrl + 'api/droplocations.php', cb);
    },
    updateDonationStatus(donation, cb){
       _makeAjax('post', {data: donation }, baseUrl + 'api/updatepledgestatus.php', cb);
     },
      submitAssignment(donation, cb){
       _makeAjax('post', {data: donation }, baseUrl + 'api/submitAssignment.php', cb);
     },
    assignRoute(donation, cb){
       _makeAjax('post', {data: donation }, baseUrl + 'api/changepledgestatus.php', cb);
     }
}

// module.exports = {
//   signup(model, cb) {
//      _makeAjax('post', { DATAasdasd: model }, 
//       'api/signup.php', cb);
//   },
//   createPledge(model, cb) {
//      _makeAjax('post', { DATAasdasd: model }, 
//       'api/myphp.php', cb);
//   },
//   fetchPickupLocations(origin, dest, cb) {
//       _makeAjax('post', { origin: origin, dest: dest }, 
//       'api/fetchPickups.php', cb);
//     },
//     login(data, cb) {
//       _makeAjax('post', { data: data }, 
//       'api/login.php', cb);
//     },
//     fetchDropLocations(cb) {
//       _makeAjax('get', { }, 'api/droplocations.php', cb);
//     },
//     updateDonationStatus(donation, cb){
//        _makeAjax('post', {data: donation }, 'api/changepledgestatus.php', cb);
//     }
 //   assignRoute(donation, cb){
 //      _makeAjax('post', {data: donation }, 'https://www.socialpixe.com/socialpixe/react/api/changepledgestatus.php', cb);
 //    }
// }