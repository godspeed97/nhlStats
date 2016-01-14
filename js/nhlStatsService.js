(function () {

    angular.module('nhlStatsApp')
        .factory('nhlStatsSvc', nhlStatsSvc);

    function nhlStatsSvc($http) {

        function getStats(url) {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        }

        return {
            getStats: getStats
        }

    }

})();