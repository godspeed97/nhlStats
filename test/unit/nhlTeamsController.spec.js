describe('nhlTeamsCtrl Unit Tests:', function () {

    var $controller;
    var nhlStatsSvc;
    var nhlTeamsCtrl;
    var promise;
    var mockData = {
        goalie: [
            {
                "position": "Goalie", "id": 8475883, "twitterURL": "https://twitter.com/f_andersen30", "weight": 220, "height": "6' 4\"",
                "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8475883.jpg", "birthplace": "Herning, DNK", "twitterHandle": "f_andersen30",
                "age": 26, "name": "Frederik Andersen", "birthdate": "October 02, 1989", "number": 31
            },
            {
                "position": "Goalie", "id": 8476434, "twitterURL": "https://twitter.com/JohnGibson35", "weight": 226, "height": "6' 3\"",
                "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8476434.jpg", "birthplace": "Pittsburgh, PA, USA", "twitterHandle": "JohnGibson35",
                "age": 22, "name": "John Gibson", "birthdate": "July 14, 1993", "number": 36
            }
        ],
        defensemen: [
            {
                "position": "Defenseman", "id": 8469598, "weight": 200, "height": "6' 1\"", "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8469598.jpg",
                "birthplace": "Grimsby, ON, CAN", "age": 34, "name": "Kevin Bieksa", "birthdate": "June 16, 1981", "number": 2
            },
            {
                "position": "Defenseman", "id": 8475155, "twitterURL": "https://twitter.com/Despres747", "weight": 218, "height": "6' 4\"",
                "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8475155.jpg", "birthplace": "Laval, QC, CAN", "twitterHandle": "Despres747",
                "age": 24, "name": "Simon Despres", "birthdate": "July 27, 1991", "number": 24
            }
        ],
        forwards: [
            {
                "position": "Left Wing", "id": 8471699, "weight": 184, "height": "5' 10\"", "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8471699.jpg",
                "birthplace": "Toronto, ON, CAN", "age": 28, "name": "Andrew Cogliano", "birthdate": "June 14, 1987", "number": 7
            },
            {
                "position": "Center", "id": 8476116, "weight": 195, "height": "6' 0\"", "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8476116.jpg",
                "birthplace": "Edmonton, AB, CAN", "age": 30, "name": "Ryan Garbutt", "birthdate": "August 12, 1985", "number": 16
            }
        ]
    };
    var mockDataProcessed = [
        ["http://3.cdn.nhle.com/photos/mugs/8475883.jpg","Frederik Andersen",31,"Goalie","6' 4\"",220,"October 02, 1989",26,"Herning, DNK"],
        ["http://3.cdn.nhle.com/photos/mugs/8476434.jpg","John Gibson",36,"Goalie","6' 3\"",226,"July 14, 1993",22,"Pittsburgh, PA, USA"],
        ["http://3.cdn.nhle.com/photos/mugs/8469598.jpg","Kevin Bieksa",2,"Defenseman","6' 1\"",200,"June 16, 1981",34,"Grimsby, ON, CAN"],
        ["http://3.cdn.nhle.com/photos/mugs/8475155.jpg","Simon Despres",24,"Defenseman","6' 4\"",218,"July 27, 1991",24,"Laval, QC, CAN"],
        ["http://3.cdn.nhle.com/photos/mugs/8471699.jpg","Andrew Cogliano",7,"Left Wing","5' 10\"",184,"June 14, 1987",28,"Toronto, ON, CAN"],
        ["http://3.cdn.nhle.com/photos/mugs/8476116.jpg","Ryan Garbutt",16,"Center","6' 0\"",195,"August 12, 1985",30,"Edmonton, AB, CAN"]
    ];

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

    it('nhlStatsSvc.getStats should have been called', function () {
        nhlTeamsCtrl = $controller('nhlTeamsCtrl', { nhlStatsSvc: nhlStatsSvc });
        promise.then(function (data) {
            expect(nhlStatsSvc.getStats).toHaveBeenCalled();
            done();
        });
    });
    
    it('nhlTeamsCtrl.team should have the processed value', function (done) {  
        nhlTeamsCtrl = $controller('nhlTeamsCtrl', { nhlStatsSvc: nhlStatsSvc });       
        promise.then(function (data) {
            expect(nhlTeamsCtrl.team).toEqual(mockDataProcessed); 
            done();
        });
    });

    it('nhlTeamsCtrl should be defined', function () {
        nhlTeamsCtrl = $controller('nhlTeamsCtrl', { nhlStatsSvc: nhlStatsSvc });
        expect(nhlTeamsCtrl).toBeDefined();
    });

    it('nhlTeamsCtrl instance variables should be defined', function () {
        nhlTeamsCtrl = $controller('nhlTeamsCtrl', { nhlStatsSvc: nhlStatsSvc });
        expect(nhlTeamsCtrl.team).toBeDefined();
    });

});