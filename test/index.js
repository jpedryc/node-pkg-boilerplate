var should = require('chai').should();
var MyClass = require('../dist/index');

describe('MyClass - callMe()', function() {
    it('Check 50% of 8', function() {
        var mock = {
            percent: 50,
            amount: 8
        };

        var myClass = new MyClass();
        myClass.callMe(mock).should.equal(4)
    })

    it('Check 25% of 100', function() {
        var mock = {
            percent: 25,
            amount: 100
        };

        var myClass = new MyClass();
        myClass.callMe(mock).should.equal(25)
    })

    it('Check 0% of 423', function() {
        var mock = {
            percent: 0,
            amount: 423
        };

        var myClass = new MyClass();
        myClass.callMe(mock).should.equal(0)
    })

    it('Check 100% of 17', function() {
        var mock = {
            percent: 100,
            amount: 17
        };

        var myClass = new MyClass();
        myClass.callMe(mock).should.equal(17)
    })

    it('Check 150% of 50', function() {
        var mock = {
            percent: 150,
            amount: 50
        };

        var myClass = new MyClass();
        myClass.callMe(mock).should.equal(75)
    })
});