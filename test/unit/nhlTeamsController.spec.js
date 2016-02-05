describe('nhlTeamsCtrl Unit Tests:', function () {
    
    var $controller;
    var nhlStatsSvc;
    var nhlTeamsCtrl;
    var promise;
    var mockData;
    var mockDataProcessed;
    
    beforeEach(module('nhlStatsApp'));

    beforeEach(inject(function (_$controller_, _nhlStatsSvc_) {
        $controller = _$controller_;
        nhlStatsSvc = _nhlStatsSvc_;
        
        promise = new Promise(function (resolve) {
            resolve(mockData);
        });
        
        spyOn(nhlStatsSvc, 'getStats').and.callFake(function () {
            return promise;
        });
    }));
    
    
    it('nhlTeamsCtrl should be defined', function () {
        nhlTeamsCtrl = $controller('nhlTeamsCtrl', { nhlStatsSvc: nhlStatsSvc });
        expect(nhlTeamsCtrl).toBeDefined();
    });

    it('nhlTeamsCtrl instance variables should be defined', function () {
        nhlTeamsCtrl = $controller('nhlTeamsCtrl', { nhlStatsSvc: nhlStatsSvc });
        expect(nhlTeamsCtrl.team).toBeDefined();
    });
    
});