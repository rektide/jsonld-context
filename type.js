"use strict"
module.exports= {
	"@id": "http://json-ld.org/type",
	"@context": require( "./meta"),
	"@type": [
		"meta:Property",
		"rdfs:Property"
	],
	"description": "Used to set the data type of a node or typed value.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#typed-values",
	"range": "@id"
}
