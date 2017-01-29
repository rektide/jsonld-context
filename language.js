"use strict"
module.exports= {
	"@id": "http://json-ld.org/language",
	"@context": require( "./meta"),
	"@type": [
		"meta:Property",
		"rdfs:Property"
	],
	"description": "Used to specify the language for a particular string value or the default language of a JSON-LD document.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#string-internationalization",
	"range": "xsd:string"
}
