"use strict"
module.exports= {
	"@id": "http://json-ld.org/expandedTermDefinition",
	"@context": require( "./meta"),
	"@type": "http://json-ld.org/termDefinition",
	"description": "An expanded term definition, is a term definition where the value is a JSON object containing one or more keyword properties to define the associated absolute IRI, if this is a reverse property, the type associated with string values, and a container mapping.",
	"documentation": "http://json-ld.org/spec/latest/json-ld/#context-definitions",
	"properties": [
		"http://json-ld.org/id",
		"http://json-ld.org/reverse",
		"http://json-ld.org/type",
		"http://json-ld.org/language",
		"http://json-ld.org/context",
		"http://json-ld.org/container"
	]
}
