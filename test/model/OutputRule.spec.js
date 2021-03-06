/**
 * ARTIK Cloud API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ArtikCloud);
  }
}(this, function(expect, ArtikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ArtikCloud.OutputRule();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OutputRule', function() {
    it('should create an instance of OutputRule', function() {
      // uncomment below and update the code to test OutputRule
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be.a(ArtikCloud.OutputRule);
    });

    it('should have the property aid (base name: "aid")', function() {
      // uncomment below and update the code to test the property aid
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property invalidatedOn (base name: "invalidatedOn")', function() {
      // uncomment below and update the code to test the property invalidatedOn
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property languageVersion (base name: "languageVersion")', function() {
      // uncomment below and update the code to test the property languageVersion
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property rule (base name: "rule")', function() {
      // uncomment below and update the code to test the property rule
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

    it('should have the property warning (base name: "warning")', function() {
      // uncomment below and update the code to test the property warning
      //var instane = new ArtikCloud.OutputRule();
      //expect(instance).to.be();
    });

  });

}));
