var createPattern = function(path) {
  return {
    pattern: path,
    included: true,
    served: true,
    watched: false
  };
};

var init = function(files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
};

init.$inject = ['config.files'];

module.exports = {
  'framework:cljs-test': ['factory', init]
};
