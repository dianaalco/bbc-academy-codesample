#!/usr/bin/env node

'use strict';

const argv = require( 'yargs' )
	.alias( 'c', 'city' )
	.usage( 'Usage: $0 -c [str]' )
	.demandOption( [ 'c' ] )
	.argv;

const weather = require( '../lib/weather-cities' );
const city = argv.city;

weather( city, function( result ) {
	if ( result.err ) {
		console.error( result.err );
	} else {
		console.log( JSON.stringify( result, null, '\t' ) );
	}
} );