var question = [0, 1, 2, 3, 4];
var jim = {
    name: "Jim",
    image: "",
    score: [1, 3, 5, 8, 4]
};
var christen = {
    name: "Christen",
    image: "",
    score: [4, 1, 6, 8, 10]
};
var poncho = {
    name: "poncho",
    image: "",
    score: [1, 1, 1, 1, 1]
};
var friends = [jim, christen, poncho];

function compare() {
    var friendMatchComparison = [];
    //loops through stored friends
    for (var c = 0; c < (friends.length - 1); c++) {
        var comparisonArray = [];
        //loops and compares responses for each question against user's responses
        for (var i = 0; i < question.length; i++) {
            var comp = friends[2].score[i] - friends[c].score[i];
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
        console.log(comparisonArray);
        var totalVal = 0;
        for (var i = 0; i < question.length; i++) {
            totalVal += comparisonArray[i];
        }
        //console.log("total comp val: " + totalVal);
        friendMatchComparison.push(totalVal);
    }
    console.log(friendMatchComparison);
    //find the lowest number
    var matchScore = Math.min.apply(null, friendMatchComparison);
    console.log("matchScore: " + matchScore);
    for (var g = 0; g < friendMatchComparison.length; g++) {
        if (matchScore === friendMatchComparison[g]) {
            console.log("your match is: " + friends[g].name);
        }
    }
}

compare();
