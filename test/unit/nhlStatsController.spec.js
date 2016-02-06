describe('test', function () {

    var $controller;
    var nhlStatsSvc;
    var nhlStatsCtrl;
    var resolvedPromise;
    var rejectedPromise;
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
    ];

    beforeEach(module('nhlStatsApp'));

    beforeEach(inject(function (_$controller_, _nhlStatsSvc_) {
        $controller = _$controller_;
        nhlStatsSvc = _nhlStatsSvc_;
        resolvedPromise = Promise.resolve(mockData);
        rejectedPromise = Promise.reject('oops');    
    }));

    it('nhlStatsSvc.getStats should have been called', function (done) {
        spyOn(nhlStatsSvc, 'getStats').and.callFake(function () {
            return resolvedPromise;
        });
        nhlStatsCtrl = $controller('nhlStatsCtrl', { nhlStatsSvc: nhlStatsSvc });
        resolvedPromise.then(function (data) {
            expect(nhlStatsSvc.getStats).toHaveBeenCalled();
            done();
        });
    });

    it('nhlStatsCtrl.points should have the processed value', function (done) {
        spyOn(nhlStatsSvc, 'getStats').and.callFake(function () {
            return resolvedPromise;
        });
        nhlStatsCtrl = $controller('nhlStatsCtrl', { nhlStatsSvc: nhlStatsSvc });
        resolvedPromise.then(function (data) {
            expect(nhlStatsCtrl.points).toEqual(mockDataProcessed);
            done();
        });
    });

    it('nhlStatsCtrl.errorPoints should contain the error after nhlStatsSvc.getStats throws an error', function (done) {
        spyOn(nhlStatsSvc, 'getStats').and.callFake(function () {
            return rejectedPromise;
        });
        nhlStatsCtrl = $controller('nhlStatsCtrl', { nhlStatsSvc: nhlStatsSvc });
        rejectedPromise.then(function (res) {
            //...
        })
        .catch(function (err) {
            expect(nhlStatsCtrl.errorPoints).toEqual(err);
            done();
        });
    });

    it('nhlStatsCtrl should be defined', function () {
        expect(nhlStatsCtrl).toBeDefined();
    });

    it('nhlStatsCtrl instance variables should be defined', function () {
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