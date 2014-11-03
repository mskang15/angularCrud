'use strict';

angular.module('swFrontApp').service('edges', function($resource) {
    return $resource('/api/edges/:id', {id:'@id'});
//    this.query = function() {
//        return [{
//            name: 'Attractive',
//            description: 'blah',
//            category: {
//                name: 'Background'
//            },
//            requirements: [
//                { name: null, value: 'Novice', mode: 'rank'},
//                { name: 'Vigor', value: 'd6', mode: 'trait'}
//            ]
//        },
//            {
//                name: 'Attractive',
//                description: 'blah',
//                category: {
//                    name: 'Background'
//                },
//                requirements: [
//                    { name: null, value: 'Novice', mode: 'rank'},
//                    { name: 'Vigor', value: 'd6', mode: 'trait'}
//                ]
//            },
//            {
//                name: 'Attractive',
//                description: 'blah',
//                category: {
//                    name: 'Background'
//                },
//                requirements: [
//                    { name: null, value: 'Novice', mode: 'rank'},
//                    { name: 'Vigor', value: 'd6', mode: 'trait'}
//                ]
//            }]
//    }
});