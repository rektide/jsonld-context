#!/usr/bin/env node
"use strict"
module.exports= {
	"@context": require( "./context")
}
if( require.main=== module){
	console.log( JSON.stringify( module.exports))
}
