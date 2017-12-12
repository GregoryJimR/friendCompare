var friendsData = require('../data/friends.js');
var apiRoutes = function(app) {
    //path 1 - Get rout to /api/friends.  displays JSON of all possible friends

    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });
    //Post route - /api/friends to handle incoming survey results.  also handles the compare logic
    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        var newperson = req.body;
        console.log(newperson["score[]"]);
        // newperson.score = newperson.score.map(function(elem) { return parseInt(elem); });
        friendsData.push(newperson);
        // res.json(newperson);
        //function compare() {
        var friendMatchComparison = [];
        //loops through stored friends
        for (var c = 0; c < (friendsData.length - 1); c++) {
            var comparisonArray = [];
            //loops and compares responses for each question against user's responses
            for (var i = 0; i < 10; i++) {
                var newpersonIndex = (friendsData.length - 1);
                var comp = friendsData[2]["score[]"][i] - friendsData[c].score[i];
                //adjusts for negative integers
                if (comp < 0) {
                    comp = comp * -1;
                    //stores each comparison
                    //comparisonArray.push(comp);
                }
                else {
                    //stores each comparison
                    //comparisonArray.push(comp);
                }
                comparisonArray.push(comp);

            }
            //console.log(comparisonArray);
            var totalVal = 0;
            for (var i = 0; i < 10; i++) {
                totalVal += comparisonArray[i];
            }
            //console.log("total comp val: " + totalVal);
            friendMatchComparison.push(totalVal);
        }
        //console.log(friendMatchComparison);
        //find the lowest number
        var matchScore = Math.min.apply(null, friendMatchComparison);
        //console.log("matchScore: " + matchScore);
        for (var g = 0; g < (friendMatchComparison.length); g++) {
            if (matchScore === friendMatchComparison[g]) {
                console.log("your match is: " + friendsData[g].name);
                var match = {
                    name: friendsData[g].name,
                    image: friendsData[g].image
                };
                //res.send(match);
                //return match;
            }
        }
        res.json(match);
        //}

        //compare();


    });

};

module.exports = apiRoutes;
