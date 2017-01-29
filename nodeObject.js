"use strict"
module.exports= {
	"@id": "http://json-ld.org/nodeObject",
	"@context": require( "./meta"),
	"@type": [
		"meta:Class",
		"rdfs:Class"
	],
	"description": "A node object represents zero or more properties of a node in the graph serialized by the JSON-LD document",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#node-objects",
	"properties": [
		"http://json-ld.org/context",
		"http://json-ld.org/id",
		"http://json-ld.org/graph",
		"http://json-ld.org/nest",
		"http://json-ld.org/type",
		"http://json-ld.org/reverse",
		"http://json-ld.org/index"
	]
}
