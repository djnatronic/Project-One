var array = [beef, chicken, tofu, veggies, vegan]
console.log(array)

var resultsArr = []

var beef = array[0]
var chicken = array[1]
var tofu = array[2]
var fish = array[3]

var yes1 = 0
var no1 = 0
var yes2 = 0
var no2 = 0
var yes3 = 0
var no3 = 0
var yes4 = 0
var no4 = 0
var yes5 = 0
var no5 = 0
var yes6 = 0
var no6 = 0
var yes7 = 0
var no7 = 0
var yes8 = 0
var no8 = 0
var yes9 = 0
var no9 = 0

console.log(yes1)
console.log(no1)
console.log(yes2)
console.log(no2)

function scoreY1(yes1) {
    // beef--
    // chicken--
    // tofu++
    // veggies++
    // vegan++
    console.log(yes1)

    if (yes1) {
        resultsArr[0] = "meat"
        console.log(resultsArr)
    }
    else {
        resultsArr[0] = "noMeat"
        console.log(resultsArr)
    }

    return resultsArr[0]

}

function scoreN1(no1) {
    console.log(no1)

    if (no1) {
        resultsArr[0] = "noMeat"
        console.log(resultsArr)
    }
    else {
        resultsArr[0] = "meat"
        console.log(resultsArr)
    }

    return resultsArr[0]
    
}

function scoreY2(yes2) {
    console.log(yes2)

    if (yes2) {
        resultsArr[1] = "spicy"
        console.log(resultsArr)
    }
    else {
        resultsArr[1] = "noSpicy"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreN2(no2) {
    console.log(no2)

    if (no2) {
        resultsArr[1] = "noSpicy"
        console.log(resultsArr)
    }
    else {
        resultsArr[1] = "spicy"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreY3(yes3) {
    console.log(yes3)
    
    if (yes3) {
        resultsArr[2] = "strong"
        console.log(resultsArr)
    }
    else {
        resultsArr[2] = "noStrong"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreN3(no3) {
    console.log(no3)

    if (no3) {
        resultsArr[2] = "noStrong"
        console.log(resultsArr)
    }
    else {
        resultsArr[2] = "strong"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreY4(yes4) {
    console.log(yes4)
    
    if (yes4) {
        resultsArr[3] = "sweet"
        console.log(resultsArr)
    }
    else {
        resultsArr[3] = "noSweet"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreN4(no4) {
    console.log(no4)

    if (no4) {
        resultsArr[3] = "noSweet"
        console.log(resultsArr)
    }
    else {
        resultsArr[3] = "sweet"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreY5(yes5) {
    console.log(yes5)
    
    if (yes5) {
        resultsArr[4] = "dance"
        console.log(resultsArr)
    }
    else {
        resultsArr[4] = "noDance"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreN5(no5) {
    console.log(no5)

    if (no5) {
        resultsArr[4] = "noDance"
        console.log(resultsArr)
    }
    else {
        resultsArr[4] = "dance"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreY6(yes6) {
    console.log(yes6)
    
    if (yes6) {
        resultsArr[5] = "modern"
        console.log(resultsArr)
    }
    else {
        resultsArr[5] = "noModern"
        console.log(resultsArr)
    }

    return (resultsArr)
}

function scoreN6(no6) {
    console.log(no6)

    if (no6) {
        resultsArr[5] = "noModern"
        console.log(resultsArr)
    }
    else {
        resultsArr[5] = "modern"
        console.log(resultsArr)
    }

    return (resultsArr)
}

var testArray1 = ["beef", "chicken", "beef", "lamb"]
var testArray2 = ["chicken", "beef", "chicken","lamb"]
var testArray3 = ["lamb", "chicken", "beef", "lamb"]
console.log(array)
var resultsArr = []
var array = testArray1

beefCount = 0
chickenCount = 0
fishCount = 0 
var count = 0;

for(var i = 0; i < array.length; ++i){
    if(array[i] === 'beef'){
        beefCount++;}
    if (array[i] === 'chicken'){
        chickenCount++;}
    if (array[i] === 'fish'){
        fish++;}
}
if(beefCount > chickenCount && beefCount > lambCount){
    console.log("beefCount wins!")
}
if(chickenCount > beefCount && chickenCount > lambCount){
    console.log("chickenCount wins!")
}
if(fishCount > chickenCount && lambCount > beefCount){
    console.log("fishCount wins!")
}


//Make profiles of users
//They get a score
//Match them with a profile based on score
//Each profile gets one recipe, one drink, one music
var currentProfile;

function loadMatchProfile(score) {
    if (score > 0 && score < 10){
        currentProfile = profiles.one
    }
    else if (score > 11 && score < 20){
        currentProfile = profiles.two
    }
}

var profiles = {
    one:{
        ingredients: ["onions","chicken"]
    },
    two:{
        ingredients: ["beef", "garlic"]
    },
    three:{
        ingredients: ["peppers", "fish"]
    },
}

function createRecipePuppyURL(ingredients) {
    return `http://www.recipepuppy.com/api/?i=${ingredients.join(",")}`
}

function fetchRecipes(ingredients) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://recipe-puppy.p.rapidapi.com/?p=1&i=${ingredients.join(",")}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": "9ec1115318msh77b76d228bf0005p19e2b5jsnf6c122346c33"
        }
    }
    return $.ajax(settings)
}

fetchRecipes(currentprofile.ingredients)
    .then(function(response){
       return JSON.parse(response)
    })
    .then(data => {
        console.log(data)
    })


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