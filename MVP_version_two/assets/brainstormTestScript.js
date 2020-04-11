var array = [beef, chicken, tofu, veggies, vegan]
console.log(array)

var resultsArr = []

var beef = array[0]
var chicken = array[1]
var tofu = array[2]
var veggies = array[3]
var vegan = array[4]

var yes1 = 0
var no1 = 0
var yes2 = 0
var no2 = 0

console.log(yes1)
console.log(no1)
console.log(yes2)
console.log(no2)

function scoreY1(yes1) {
    beef--
    chicken--
    tofu++
    veggies++
    vegan++
    console.log(yes1)

    if (yes1) {
        resultsArr[0] = "noMeat"
        console.log(resultsArr)
    }
    else {
        resultsArr[0] = "meat"
        console.log(resultsArr)
    }

    return resultsArr[0]

}

function scoreN1(no1) {
    beef++
    chicken++
    tofu--
    veggies--
    vegan--
    console.log(no1)

    if (no1) {
        resultsArr[0] = "meat"
        console.log(resultsArr)
    }
    else {
        resultsArr[0] = "noMeat"
        console.log(resultsArr)
    }

    return resultsArr[0]
    
}

function scoreY2(yes2) {
    beef++
    chicken--
    tofu++
    veggies--
    vegan--
    console.log(yes2)

    
    if (no1) {
        resultsArr[1] = "noVegan"
        console.log(resultsArr)
    }
    else {
        resultsArr[1] = "vegan"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreN2(no2) {
    beef--
    chicken--
    tofu++
    veggies++
    vegan--
    console.log(no2)

    if (no1) {
        resultsArr[1] = "vegan"
        console.log(resultsArr)
    }
    else {
        resultsArr[1] = "noVegan"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreTotal (scoreTotal) {

    console.log(" " + scoreY1() + " " + scoreY2() + " " + scoreN1() + " " + scoreN2() + " ")
    console.log(scoreTotal)

    console.log(scoreY1())

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=" + scoreY1(),
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": "3eb55b5bc9mshcd18231da3d1013p112c4cjsn6acd3db0b1c9"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

}

// added content

// function CitySearch(scoreTotal){
//     console.log("Start City Search")
//     var searchValue = $( "#SearchBox" ).val()
//     console.log(scoreY1)
//     console.log(scoreTotal)
    
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=" + searchValue,
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "tasty.p.rapidapi.com",
//         "x-rapidapi-key": "3eb55b5bc9mshcd18231da3d1013p112c4cjsn6acd3db0b1c9"
//       }
//     }
    
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//     });

//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://tasty.p.rapidapi.com/tags/list",
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "tasty.p.rapidapi.com",
//         "x-rapidapi-key": "3eb55b5bc9mshcd18231da3d1013p112c4cjsn6acd3db0b1c9"
//       }
//     }
    
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//     });
// }

// CitySearch()

//Cocktail API
/* console.log(searchValue)
    
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ searchValue 
console.log(queryURL)
$.ajax({
  url: queryURL,
  crossDomain: true,
  method: "GET"
}).then(function(response) {
  console.log(response);
}); */

