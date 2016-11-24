import NProgress from 'nProgress';

module.exports = {
  path: 'voluntarypickup',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./PickupPageLayout').default);
    });
  }
}