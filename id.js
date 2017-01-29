"use strict"
module.exports= {
	"@id": "http://json-ld.org/id",
	"@context": require( "./meta"),
	"@type": "@id",
	"description": "Used to uniquely identify things that are being described in the document with IRIs or blank node identifiers.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#node-identifiers",
	"range": "@id"
}
