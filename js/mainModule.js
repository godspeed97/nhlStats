(function () {

	angular.module('nhlStatsApp', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/teams');
			
			$stateProvider
				.state('teams', {
					url: '/teams',
					views: {
						'statsContent@': {
							templateUrl: 'views/teams.html'
						}
					}
				})
				.state('team', {
					url: '/teams/:team',
					views: {
						'statsContent@': {
							templateUrl: 'views/team.html'
						}
					}
				})
				.state('points', {
					url: '/points',
					views: {
						'statsContent@': {
							templateUrl: 'views/points.html'
						}
					}
				})
				.state('goals', {
					url: '/goals',
					views: {
						'statsContent@': {
							templateUrl: 'views/goals.html'
						}
					}
				})
				.state('assists', {
					url: '/assists',
					views: {
						'statsContent@': {
							templateUrl: 'views/assists.html'
						}
					}
				})
				.state('plusminus', {
					url: '/plusminus',
					views: {
						'statsContent@': {
							templateUrl: 'views/plusminus.html'
						}
                    }
				});
			
		});

})();