"use strict"
module.exports= {
	"@id": "http://json-ld.org/base",
	"@context": require( "./meta"),
	"@type": "@id",
	"description": "Used to set the base IRI against which relative IRIs are resolved.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#base-iri",
	"range": "@id"
}
