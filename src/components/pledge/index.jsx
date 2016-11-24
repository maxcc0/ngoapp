import NProgress from 'nProgress';

module.exports = {
  path: 'pledge',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Pledge').default);
    });
  }
}