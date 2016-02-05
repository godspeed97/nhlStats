(function () {

    angular.module('nhlStatsApp')
        .controller('nhlStatsCtrl', nhlStatsCtrl);

    function nhlStatsCtrl(nhlStatsSvc) {

        var vm = this;
        var pointsUrl = 'https://jsonp.afeld.me/?url=http://nhlwc.cdnak.neulion.com/fs1/nhl/league/leagueleaders/iphone/points/leagueleaders.json';
        var goalsUrl = 'https://jsonp.afeld.me/?url=http://nhlwc.cdnak.neulion.com/fs1/nhl/league/leagueleaders/iphone/goals/leagueleaders.json';
        var assistsUrl = 'https://jsonp.afeld.me/?url=http://nhlwc.cdnak.neulion.com/fs1/nhl/league/leagueleaders/iphone/assists/leagueleaders.json';
        var plusminusUrl = 'https://jsonp.afeld.me/?url=http://nhlwc.cdnak.neulion.com/fs1/nhl/league/leagueleaders/iphone/plusminus/leagueleaders.json';

        vm.points = [];
        vm.goals = [];
        vm.assists = [];
        vm.plusminus = [];

        vm.errorPoints = '';
        vm.errorGoals = '';
        vm.errorAssists = '';
        vm.errorPlusMinus = '';
        
        //POINTS------------------------------
        nhlStatsSvc.getStats(pointsUrl)
            .then(function (data) {
                vm.points = data.skaterData.map(function (obj) {
                	return obj.data.split(',');
                });
            })
            .catch(function (err) {
                vm.errorPoints = err;
            });

        //GOALS------------------------------
        nhlStatsSvc.getStats(goalsUrl)
            .then(function (data) {
                vm.goals = data.skaterData.map(function (obj) {
                    return obj.data.split(',');
                })
            })
            .catch(function (err) {
                vm.errorGoals = err;
            });

        //ASSISTS------------------------------
        nhlStatsSvc.getStats(assistsUrl)
            .then(function (data) {
                vm.assists = data.skaterData.map(function (obj) {
                    return obj.data.split(',');
                })
            })
            .catch(function (err) {
                vm.errorAssists = err;
            });
			
        //PLUSMINUS------------------------------
        nhlStatsSvc.getStats(plusminusUrl)
            .then(function (data) {
                vm.plusminus = data.skaterData.map(function (obj) {
                    return obj.data.split(',');
                })
            })
            .catch(function (err) {
                vm.errorPlusMinus = err;
            });

    }

})();