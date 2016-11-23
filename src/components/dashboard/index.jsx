import NProgress from 'nProgress';

module.exports = {
  path: '/home/collect',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./DashboardLayout').default);
    });
  }
}