import app from 'config/app';
window.App = app;

import 'config/router';
import 'config/store';
import 'config/adapter';

// Load all modules in order automagically. Ember likes things to work this
// way so everything is in the App.* namespace.
var folderOrder = [
    'initializers', 'mixins', 'routes', 'models',
    'fixtures', 'views', 'controllers', 'helpers',
    'templates', 'components'
];

folderOrder.forEach(function(folder) {
  window.require.list().filter(function(module) {
    return new RegExp("^" + folder + "/").test(module);
  }).forEach(function(module) {
    require(module);
  });
});
