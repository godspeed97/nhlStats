describe('nhlstats e2e tests', function () {
    
    beforeEach(function () {
        browser.get('http://localhost:9000/index.html');
    });
    
    it('should load the home page', function () {
        expect(element(by.tagName('body'))).toBeTruthy();
    });
    
});