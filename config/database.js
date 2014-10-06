module.exports = {

  url: function(dbName) {
    var connectionString  = (process.env.IP || '127.0.0.1') + ':27017/development';
    if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
      connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
    }

    return 'mongodb://' + connectionString;
  }
}