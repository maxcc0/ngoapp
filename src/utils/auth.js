import $ from 'jQuery';

module.exports = {

  loggedIn() {
    return $('#checkSession').text().trim();
    //return !!localStorage.token
  }
}