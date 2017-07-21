var Nightmare = require('nightmare');
const assert = require('assert')

describe(' Test Front-End Rendering', function() {

    this.timeout(30000);

    it('Angular 1 render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://angularone.semicolon.xyz')
        .viewport(320,480)
        .wait('.testDIV')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('Angular 2 render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://angular2.semicolon.xyz')
        .viewport(320,480)
        .wait('.testDIV')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('ReactJS render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://react.semicolon.xyz')
        .viewport(320,480)
        .wait('.testDIV')
        .end()
        .then(function(link) {
          done()
      })
    })



    it('VueJS render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://vuejs.semicolon.xyz')
        .viewport(320,480)
        .wait('.testDIV')
        .end()
        .then(function(link) {
          done()
      })
    })
    })
