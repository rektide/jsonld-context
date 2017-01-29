#!/usr/bin/env node
"use strict"
module.exports= {
	"@id": "http://json-ld.org/",
	"@context": require( "./meta.js"),
	"@graph": [
		// classes
		require( "./context.js"),
		require( "./nodeObject.js"),
		require( "./valueObject.js"),
		require( "./vocab.js"),
		// properties
		require( "./base.js"),
		require( "./compactIri.js"),
		require( "./container.js"),
		require( "./context.js"),
		require( "./expandedTermDefinition.js"),
		require( "./graph.js"),
		require( "./id.js"),
		require( "./iri.js"),
		require( "./jsonld-context.js"),
		require( "./language.js"),
		require( "./list.js"),
		require( "./nest.js"),
		require( "./nodeObject.js"),
		require( "./package.json"),
		require( "./reverse.js"),
		require( "./set.js"),
		require( "./termDefinition.js"),
		require( "./type.js"),
		require( "./value.js"),
		require( "./valueObject.js"),
		require( "./vocab.js"),
	]
}
if( require.main=== module){
	console.log( JSON.stringify( module.exports))
}




