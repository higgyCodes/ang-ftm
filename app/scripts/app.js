var utahVotes = angular.module('utahVotes', ['ui.router', 'firebase', 'ngMap', 'ui.bootstrap']);

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

        .state('booted', {
            url: '/booted',
            templateUrl: 'partials/booted.html'
        })

        .state('logged', {
            url: '/logged',
            templateUrl: 'partials/members/logged.html'
        })

            .state('logged.welcome', {
                url: '/welcome',
                templateUrl: 'partials/members/welcome.html'
            })

            .state('logged.data', {
                url: '/data',
                templateUrl: 'partials/members/data/data.html'
            })

                .state('logged.2015', {
                    url: '/2015',
                    templateUrl: 'partials/members/data/2015/2015.html'
                })

                    .state('logged.2015mayoral', {
                        url: '/mayoral',
                        templateUrl: 'partials/members/data/2015/mayoral.html'
                    })
                        .state('logged.2015mayoral.head', {
                        url: '/head',
                        templateUrl: 'partials/members/data/2015/mayoral/head.html'
                        })

                        .state('logged.2015mayoral.turnout', {
                        url: '/turnout',
                        templateUrl: 'partials/members/data/2015/mayoral/turnout.html'
                        })

                        .state('logged.2015mayoral.finance', {
                        url: '/finance',
                        templateUrl: 'partials/members/data/2015/mayoral/finance.html'
                        })

        .state('logged.collaboration', {
            url: '/collaboration',
            templateUrl: 'partials/members/collaboration/collaboration.html'
        })

            .state('logged.cmv', {
                url: '/cmv',
                templateUrl: 'partials/members/collaboration/cmv/cmv.html'
            })

                .state('logged.openseat', {
                    url: '/openseat',
                    templateUrl: 'partials/members/collaboration/cmv/openseat.html'
                })

                .state('logged.potcands', {
                    url: '/potcands',
                    templateUrl: 'partials/members/collaboration/cmv/potcands.html'
                })
});
