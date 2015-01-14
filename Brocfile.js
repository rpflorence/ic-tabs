var mergeTrees = require('broccoli-merge-trees'),
    moduleFilter = require('broccoli-dist-es6-module'),
    templateFilter = require('ember-cli-htmlbars');

var templates = templateFilter('lib');

var dist = moduleFilter(templates, {
      global: 'ic.tabs',
      packageName: 'ic-tabs',
      main: 'main',
      shim: {
        'ember': 'Ember'
      }
    });

module.exports = mergeTrees([dist]);
