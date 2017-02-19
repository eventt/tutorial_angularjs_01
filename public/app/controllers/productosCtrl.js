/*!
 * @(#)productosCtrl.js
 * @author: Diego Guevara <http://diegoguevara.eventt.co>
 * Controller de la pagina de productos
 */

/* global, appControllers */

'use strict';

/**
 * @controller productos_ctrl
 * @param  {object}     $scope              {@link https://docs.angularjs.org/guide/scope}
 * @param  {object}     $rootScope          {@link https://docs.angularjs.org/api/ng/service/$rootScope}
 * @param  {object}     $routeParams        {@link https://docs.angularjs.org/api/ngRoute/service/$routeParams}
 * @param  {object}     $location           {@link https://docs.angularjs.org/api/ng/service/$location}
 */
appControllers.controller(
    'productos_ctrl',
    ['$scope', '$rootScope', '$routeParams', '$location',
    function ($scope, $rootScope, $routeParams, $location) {

        console.log(' Llamaste al Controller PRODUCTOS ...');
    }
]);
