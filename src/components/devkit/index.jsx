import NProgress from 'nProgress';

module.exports = {
  path: '/home/developerkit',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./DevkitLayout').default);
    });
  }
}