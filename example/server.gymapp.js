process.umask(077);
var reStore = require('./lib/restore');

// To use the Redis store:
var store   = new reStore.Redis({
  host:     'localhost',    // default is 'localhost'
  port:     6379,           // default is 6379
  database: 2,              // default is 0
  password: ''              // default is no password
});

var server  = new reStore({
		store:  store,
    http:   { port: 8080 },
    allow:  {
      signup: true,
      debug: true
    }
});

server.boot();
