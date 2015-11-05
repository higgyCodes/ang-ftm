var utahVotes = angular.module('utahVotes', ['ui.router', 'firebase', 'ngMap']);

utahVotes.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')

    $stateProvider

    // Home state

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })

        .state('data', {
            url: '/data',
            templateUrl: 'partials/data.html'
        })

        .state('campaigns', {
            url: '/campaigns',
            templateUrl: 'partials/campaigns.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html'
        })

        .state('member', {
            url: '/member',
            templateUrl: 'partials/member.html'
        })

        .state('mapping', {
            url: '/mapping',
            templateUrl: 'partials/mapping.html'
        })

        .state('cmv', {
            url: '/cmv',
            templateUrl: 'partials/cmv.html'
        })

        .state('openseat', {
            url: '/openseat',
            templateUrl: 'partials/openseat.html'
        })

        .state('potcands', {
            url: '/potcands',
            templateUrl: 'partials/potcands.html'
        })
});
