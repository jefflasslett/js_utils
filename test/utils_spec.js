asdf = require( '../utils' );

describe( "js_utils (aka `asdf`)", function () {

  describe( "#classOf", function () {

    it( "returns Null for arg of `null`", function () {
      expect( asdf.classOf( null ) ).to.equal( "Null" );
    });

    it( "returns Undefined for arg of `undefined`", function () {
      expect( asdf.classOf( undefined ) ).to.equal( "Undefined" );
    });

    it( "returns Boolean for arg of `true`", function () {
      expect( asdf.classOf( true ) ).to.equal( "Boolean" );
    });

    it( "returns Boolean for arg of `false`", function () {
      expect( asdf.classOf( false ) ).to.equal( "Boolean" );
    });

    it( "returns Number for arg of `3.14`", function () {
      expect( asdf.classOf( 3.14 ) ).to.equal( "Number" );
    });

    it( "returns Object for arg of `{}`", function () {
      expect( asdf.classOf( {} ) ).to.equal( "Object" );
    });

    it( "returns String for arg of `\"\"`", function () {
      expect( asdf.classOf( "" ) ).to.equal( "String" );
    });

    it( "returns Array for arg of `[]`", function () {
      expect( asdf.classOf( [] ) ).to.equal( "Array" );
    });

  });

  describe( "#flatten", function () {

    it( "flattens nested objects into a flat key-value dictionary", function () {

      var input = { "a" : { "a" : { "a" : 1
                                  , "b" : 2
                                  , "c" : [ "one", "two", "three" ]
                                  }
                          , "b" : { "a" : "x"
                                  , "b" : "y"
                                  }
                          , "c" : { "a" : 3.14
                                  , "b" : 1.61
                                  }
                          }
                  , "b" : { "a" : "foo"
                          , "b" : { "a" : 8
                                  , "b" : []
                                  }
                          }
                  };

      var output = { "a.a.a" : 1
                   , "a.a.b" : 2
                   , "a.a.c" : [ "one", "two", "three" ]
                   , "a.b.a" : "x"
                   , "a.b.b" : "y"
                   , "a.c.a" : 3.14
                   , "a.c.b" : 1.61
                   , "b.a"   : "foo"
                   , "b.b.a" : 8
                   , "b.b.b" : []
                   };

      expect( asdf.flatten( input, "" ) ).to.eql( output );
    });

  });

});
