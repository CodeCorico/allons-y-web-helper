'use strict';

module.exports = function routes($allonsy) {
  if (!process.env.WEB_HELPER || process.env.WEB_HELPER != 'true') {
    return;
  }

  return {
    watch: {
      'web-compact': $allonsy.globPatterns('views/*-helper.json')
    }
  };
};
