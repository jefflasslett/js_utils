(function() {

  var root = this;

  var _ = require( "lodash" );

  var asdf = function(obj) {
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = asdf;
    }
    exports.asdf = asdf;
  } else {
    root.asdf = asdf;
  }

  asdf.classOf = function (o) {
    var c = Object.prototype.toString.call(o).slice( 8, -1 );
    return c;
  };

  asdf.flatten = function (o, k, sep ) {

    var _flatten = function ( o2, k2 ) {

      var key_prefix = "";

      if (  k !== null  ) {
        key_prefix = k + sep;
      }

      var _o2 = asdf.flatten( o[ k2 ], key_prefix + k2, sep );

      if ( asdf.classOf( _o2 ) === 'Object' ) {
        _.each( _o2, function ( val, key ) { o2[ key ] = val; } );
      }
      else {
        o2[ key_prefix + k2 ] = _o2;
      }

      return o2;
    };

    if ( _.isUndefined( sep ) ) sep = "";
    if ( asdf.classOf( o ) !== 'Object' ) return o;

    return _.reduce( _.keys( o ), _flatten, {} );
  };

}).call(this);

