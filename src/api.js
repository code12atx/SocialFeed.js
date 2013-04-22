var vent = require('./events')
  ;

var API = module.exports = function (controller) {
};

API.prototype = {

  start: function () {
    this.c.emit('start');
    return this;
  }

  , reload: function () {
    this.c.emit('reload');
    return this;
  }

  , addModule: function (module) {
    this.c.emit('addModule', module);
    return this;
  }

  , on: function (eventType, cb) {
    this.c.on(eventType, cb);
    return this;
  }

};