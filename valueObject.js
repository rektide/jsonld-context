"use strict"
module.exports= {
	"@id": "http://json-ld.org/valueObject",
	"@context": require( "./meta"),
	"@type": [
		"meta:Class",
		"rdfs:Class"
	],
	"description": "A value object is used to explicitly associate a type or a language with a value to create a typed value or a language-tagged string.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#value-objects",
	"properties": [
		"http://json-ld.org/value",
		"http://json-ld.org/type",
		"http://json-ld.org/language",
		"http://json-ld.org/index",
		"http://json-ld.org/context"
	]
}
