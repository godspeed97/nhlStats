describe('nhlStatsCtrl Unit Tests:', function () {

    var nhlStatsCtrl;
    var nhlStatsSvc;
    var $controller;
    var $q;
    var $scope;
    var deferred;
    var mockData = {
        skaterData: [
            { "id": 8474141, data: '1, CHI, R, P. Kane, 39, 23, 33, 56' },
            { "id": 8473994, data: '2, DAL, L, J. Benn, 40, 24, 28, 52' },
            { "id": 8475794, data: '3, DAL, C, T. Seguin, 40, 23, 27, 50' },
            { "id": 8474578, data: '4, OTT, D, E. Karlsson, 51, 11, 42, 53' }
        ]
    };
    var mockDataProcessed = [
        ['1', ' CHI', ' R', ' P. Kane', ' 39', ' 23', ' 33', ' 56'],
        ['2', ' DAL', ' L', ' J. Benn', ' 40', ' 24', ' 28', ' 52'],
        ['3', ' DAL', ' C', ' T. Seguin', ' 40', ' 23', ' 27', ' 50'],
        ['4', ' OTT', ' D', ' E. Karlsson', ' 51', ' 11', ' 42', ' 53']
    ]

    beforeEach(module('nhlStatsApp'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _nhlStatsSvc_) {
        $controller = _$controller_;

        $q = _$q_;
        $scope = _$rootScope_.$new();
        deferred = $q.defer();

        nhlStatsSvc = _nhlStatsSvc_;
        spyOn(nhlStatsSvc, 'getStats').and.callFake(function () {
            return deferred.promise;
        });
    }));

    it('testing this shit', function () {
        nhlStatsCtrl = $controller('nhlStatsCtrl', { nhlStatsSvc: nhlStatsSvc });
        deferred.resolve(mockData);
        $scope.$apply();
        expect(nhlStatsSvc.getStats).toHaveBeenCalled();
        expect(nhlStatsCtrl.points).toEqual(mockDataProcessed);
    });

    it('nhlStatsCtrl should be defined', function () {
        nhlStatsCtrl = $controller('nhlStatsCtrl', { nhlStatsSvc: nhlStatsSvc });
        expect(nhlStatsCtrl).toBeDefined();
    });

    it('nhlStatsCtrl instance variables should be defined', function () {
        nhlStatsCtrl = $controller('nhlStatsCtrl', { nhlStatsSvc: nhlStatsSvc });
        expect(nhlStatsCtrl.points).toBeDefined();
        expect(nhlStatsCtrl.goals).toBeDefined();
        expect(nhlStatsCtrl.assists).toBeDefined();
        expect(nhlStatsCtrl.plusminus).toBeDefined();
        expect(nhlStatsCtrl.errorPoints).toBeDefined();
        expect(nhlStatsCtrl.errorGoals).toBeDefined();
        expect(nhlStatsCtrl.errorAssists).toBeDefined();
        expect(nhlStatsCtrl.errorPlusMinus).toBeDefined();
    });

});