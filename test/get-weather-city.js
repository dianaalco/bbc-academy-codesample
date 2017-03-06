const weather = require( '../lib/weather-cities.js' );
const assert = require( 'assert' );

describe( 'Weather City', function() {

    // TEST A
    it( 'should return weather title and summary for a given city.', function( done ) {
        this.timeout( 4000 );

        weather( 'london', function( result ) {
            assert.equal( 'object', typeof result );
            assert.equal( 'undefined', typeof result.error );
            assert.equal( 'London, United Kingdom', result.title );
            assert.equal( 'string', typeof result.summary );
            done();
        } );

    } );

    // TEST B
    it( 'should return weather publication date for a given city.', function( done ) {
        this.timeout( 4000 );

        weather( 'cardiff', function( result ) {
            assert.equal( 'object', typeof result );
            assert.equal( 'undefined', typeof result.error );
            assert.equal( 'string', typeof result.date );
            done();
        } );

    } );

    // TEST C
    it.skip( 'should return weather summaries for all the cities.', function( done ) {
        this.timeout( 4000 );

        weather( 'all', function( result ) {
            assert.equal( 'undefined', typeof result.error );
            assert( Array.isArray( result ) );
            assert.equal( 3, result.length );
            assert.equal( 'manchester', result[ 0 ].title );
            assert.equal( 'string', typeof result[ 0 ].summary );
            done();
        } );

    } );

} );