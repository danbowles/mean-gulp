module.exports = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000,
  address: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || 'localhost'
};