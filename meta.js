"use strict"
module.exports= {    
	"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
	"xsd": "http://www.w3.org/2001/XMLSchema#",
	"schema": "http://schema.org/",
	"meta": "http://meta.schema.org/",
	"rdfs:subClassOf": {
		"@type": "@id"
	},
	"domain": {
		"@id": "rdfs:domain",
		"@type": "@id"
	},
	"range": {
		"@id": "rdfs:range",
		"@type": "@id"
	},
	"name": {
		"@id": "rdfs:label",
		"@type": "xsd:string"
	},
	"description": {
		"@id": "rdfs:comment",
		"@type": "xsd:string"
	},
	"documentation": {
		"@id": "http://schema.org/documentation",
		"@type": "@id"
	},
	"children": {
		"@reverse": "rdfs:subClassOf"
	},
	"properties": {
		"@reverse": "rdfs:domain"
	}
}
