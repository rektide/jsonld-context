"use strict"
module.exports= {
	"@id": "http://json-ld.org/vocab",
	"@context": require( "./meta"),
	"@type": [
		"meta:Class",
		"rdfs:Class",
		"http://json-ld.org/context"
	],
	"description": "Used to expand properties and values in @type with a common prefix IRI.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#default-vocabulary",
	"range": "@id"
}
