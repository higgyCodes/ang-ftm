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
            templateUrl: 'partials/members/member.html'
        })

            .state('dataResources', {
                url: '/dataresources',
                templateUrl: 'partials/members/data-resources/dataresources.html'
            })

                .state('mapping', {
                    url: '/mapping',
                    templateUrl: 'partials/members/data-resources/mapping/mapping.html'
                })

        .state('collaboration', {
            url: '/collaboration',
            templateUrl: 'partials/members/collaboration/collaboration.html'
        })

            .state('cmv', {
                url: '/cmv',
                templateUrl: 'partials/members/collaboration/cmv/cmv.html'
            })

                .state('openseat', {
                    url: '/openseat',
                    templateUrl: 'partials/members/collaboration/cmv/openseat.html'
                })

                .state('potcands', {
                    url: '/potcands',
                    templateUrl: 'partials/members/collaboration/cmv/potcands.html'
                })
});
