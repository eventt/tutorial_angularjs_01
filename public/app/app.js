/*!
 * @(#)app.js
 * @author: Diego Guevara <http://diegoguevara.eventt.co>
 * Configuracion de la aplicacion AngularJS
 */

/* global, angular */

'use strict';


/**
 * Definicion del modulo principal de angular, directivas y componentes requeridos
 * @module app
 */
var app_ = angular.module('app', [
    'ngRoute',           // Directiva para usar RouteProvider
    'ngResource',        // Directiva para acceso a servicios Rest con Resourse
    'ngSanitize',        // Directiva para interpretar correctamente resultados json
    'appControllers',    // controllers
]);


/**
 * Usamos este modulo para cargar los Controllers desde otros archivos JS
 */
var appControllers = angular.module('appControllers', []);



/**
 * Configuracion de $routeProvider, 
 * se define la ruta clave para cada pantalla del frontend
 * @require ngRoute
 * @module config
 * @param {object} $routeProvider    {@link https://docs.angularjs.org}
 * @param {object} $locationProvider {@link https://docs.angularjs.org}
 */
app_.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider

    .when(
    '/',
    {
        templateUrl: 'views/home.html',
        controller: 'home_ctrl'
    })

    .when(
    '/datos',
    {
        templateUrl: 'views/datos.html',
        controller: 'datos_ctrl'
    })

    .when(
    '/productos',
    {
        templateUrl: 'views/productos.html',
        controller: 'productos_ctrl'
    })

    



    // ruta por defecto
    .otherwise({ redirectTo: '/' });
}]);
