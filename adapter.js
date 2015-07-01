(function(karma, window) {
  var createClojureScriptTest = function(tc, runnerPassedIn) {
    return function () {
      if (!tc.config.args || tc.config.args.length === 0)
        throw new Error('Invalid config given. Provide a main function.');
      eval(tc.config.args[0])(tc);
    };
  };

  karma.start = createClojureScriptTest(karma);
})(window.__karma__, window);
