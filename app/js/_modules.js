//this needs to be a commonjs-module-styled export and it is automatically run
//by webpack...

module.exports = function(window) {
  //add own namespace and be a good web citizen
  window.ddjs = {};
  require('./main')(window.ddjs);
};
