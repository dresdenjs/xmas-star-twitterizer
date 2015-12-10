//top-level globally required modules
require('d3');
require('lodash');
window.io = require('socket.io-client');

//require everything from ./js and pass window for attaching global functions / namespace
require('./js/_modules.js')(window);



