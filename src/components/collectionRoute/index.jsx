import NProgress from 'nProgress';

module.exports = {
  path: '/collection',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./DashboardLayout').default);
    });
  }
}