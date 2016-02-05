describe('nhlStatsSvc Unit Tests:', function () {

    var nhlStatsSvc;
    var $httpBackend;
    var mockUrl = 'https://someurl.json';
    var response = {
        data: {
            skaterData: [
                { data: 'Player data' }
            ]
        }
    };

    beforeEach(function () {
        module('nhlStatsApp');
        inject(function (_nhlStatsSvc_, _$httpBackend_) {
            nhlStatsSvc = _nhlStatsSvc_;
            $httpBackend = _$httpBackend_;
        });
    });

    it('should have a getStats function', function () {
        expect(nhlStatsSvc.getStats).toBeDefined();
    });

    it('should make a GET request when getStats is called', function () {
        $httpBackend.expect('GET', mockUrl).respond();
        nhlStatsSvc.getStats(mockUrl);
        $httpBackend.flush();
    });

    describe('getStats Unit Tests:', function () {

        var myData = [];
        var errorStatus = '';
        var handler = {
            success: function (data) {
                myData = data;
            },
            error: function (data) {
                errorStatus = data;
            }
        }
        
        beforeEach(function () {
            spyOn(handler, 'success').and.callThrough();
            spyOn(handler, 'error').and.callThrough();
            $httpBackend.when('GET', mockUrl).respond(200, response);
            nhlStatsSvc.getStats(mockUrl).then(handler.success).catch(handler.error);
            $httpBackend.flush();
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('success handler should have been called', function () {
            expect(handler.success).toHaveBeenCalled();
        });

        it('myData should equal the response', function () {                     
            expect(myData).toEqual(response);
        });
        
        it('error handler should not have been called', function () {
            expect(handler.error).not.toHaveBeenCalled();
        });
        
        it('errorStatus should be empty', function () {                   
            expect(errorStatus).toEqual('');
        });

    });

});