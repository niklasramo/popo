/*!
 * jQuery adapter for popo.js
 * http://github.com/niklasramo/popo.js
 * Copyright (c) 2012, 2013 Niklas Rämö
 * Released under the MIT license
 */

(function ($) {
  $.fn.popo = function (method, options) {
    if (method === 'get') {
      return popo(this[0], method, options);
    } else {
      return this.each(function () {
        popo(this, method, options);
      });
    }
  };
})(self.jQuery || self.Zepto);
