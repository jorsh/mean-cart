require('chai').should();
describe('Todos page',function(){
    'use strict';
    var controller;
    beforeEach(function(){
        var TodosController = require('./controller-todos');
        controller = new TodosController();
    });

    it('Should have a heading saying "Todos"',function(){
        controller.heading.should.equal('Todos');
    });
});
