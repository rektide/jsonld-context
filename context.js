"use strict"
module.exports= {
	"@id": "http://json-ld.org/context",
	"@context": require( "./meta"),
	"@type": [
		"meta:Class",
		"rdfs:Class"
	],
	"description": "Used to define the short-hand names that are used throughout a JSON-LD document. These short-hand names are called terms and help developers to express specific identifiers in a compact manner.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#the-context",
	"properties": [
		"http://json-ld.org/language",
		"http://json-ld.org/base",
		"http://json-ld.org/vocab"
	]
}
