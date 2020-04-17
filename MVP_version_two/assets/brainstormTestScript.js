// var array = [beef, chicken, tofu, veggies, vegan]
// console.log(array)

// var resultsArr = []

// var beef = array[0]
// var chicken = array[1]
// var tofu = array[2]
// var veggies = array[3]
// var vegan = array[4]

// var yes1 = 0
// var no1 = 0
// var yes2 = 0
// var no2 = 0

// console.log(yes1)
// console.log(no1)
// console.log(yes2)
// console.log(no2)

// function scoreY1(yes1) {
//     beef--
//     chicken--
//     tofu++
//     veggies++
//     vegan++
//     console.log(yes1)

//     if (yes1) {
//         resultsArr[0] = "noMeat"
//         console.log(resultsArr)
//     }
//     else {
//         resultsArr[0] = "meat"
//         console.log(resultsArr)
//     }

//     return resultsArr[0]

// }

// function scoreN1(no1) {
//     beef++
//     chicken++
//     tofu--
//     veggies--
//     vegan--
//     console.log(no1)

//     if (no1) {
//         resultsArr[0] = "meat"
//         console.log(resultsArr)
//     }
//     else {
//         resultsArr[0] = "noMeat"
//         console.log(resultsArr)
//     }

//     return resultsArr[0]
    
// }

// function scoreY2(yes2) {
//     beef++
//     chicken--
//     tofu++
//     veggies--
//     vegan--
//     console.log(yes2)

    
//     if (no1) {
//         resultsArr[1] = "noVegan"
//         console.log(resultsArr)
//     }
//     else {
//         resultsArr[1] = "vegan"
//         console.log(resultsArr)
//     }

//     return (resultsArr)
// }

// function scoreN2(no2) {
//     beef--
//     chicken--
//     tofu++
//     veggies++
//     vegan--
//     console.log(no2)

//     if (no1) {
//         resultsArr[1] = "vegan"
//         console.log(resultsArr)
//     }
//     else {
//         resultsArr[1] = "noVegan"
//         console.log(resultsArr)
//     }

//     return (resultsArr)
// }

// function scoreTotal (scoreTotal) {

//     console.log(" " + scoreY1() + " " + scoreY2() + " " + scoreN1() + " " + scoreN2() + " ")
//     console.log(scoreTotal)

//     console.log(scoreY1())

//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=" + scoreY1(),
//         "method": "GET",
//         "headers": {
//           "x-rapidapi-host": "tasty.p.rapidapi.com",
//           "x-rapidapi-key": "3eb55b5bc9mshcd18231da3d1013p112c4cjsn6acd3db0b1c9"
//         }
//       }
      
//       $.ajax(settings).done(function (response) {
//         console.log(response);
//       });

// }

// Julie code:

// var currentProfile;
// function loadMatchProfile(score) {
//     if (score > 0 && score < 10){
//         currentProfile = profiles.one
//     }
//     else if (score > 11 && score < 20){
//         currentProfile = profiles.two
//     }
// }
// var profiles = {
//     one:{
//         ingredients: ["onions","chicken"]
//     },
//     two:{
//         ingredients: ["beef", "garlic"]
//     },
//     three:{
//         ingredients: ["peppers", "fish"]
//     },
// }
// function createRecipePuppyURL(ingredients) {
//     return `http://www.recipepuppy.com/api/?i=${ingredients.join(",")}`
// }
// function fetchRecipes(ingredients) {
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": `https://recipe-puppy.p.rapidapi.com/?p=1&i=${ingredients.join(",")}`,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
//             "x-rapidapi-key": "9ec1115318msh77b76d228bf0005p19e2b5jsnf6c122346c33"
//         }
//     }
//     return $.ajax(settings)
// }
// fetchRecipes(currentprofile.ingredients)
//     .then(function(response){
//        return JSON.parse(response)
//     })
//     .then(data => {
//         console.log(data)
//     })

// RP AJAX call //

    // var queryURL = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //     console.log(response)
    // });

// pixabey AJAX call //

    // var APIKey = "16049411-2343c269bd40939b11788f149";

    // var foodName = "roast beef"

    // var queryURL = "https://pixabay.com/api/?key=" + APIKey + "&q=" + foodName + "&image_type=photo";


    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //     console.log(response)

    //     $("#foodImg").attr("src", response.hits[0].webformatURL)
    // });

    // Nathan script file:

    //var array = [beef, chicken, tofu, veggies, vegan]
​
var testArray1 = ["beef", "chicken", "beef", "fish"]
var testArray2 = ["chicken", "beef", "chicken","fish"]
var testArray3 = ["vegetarian", "chicken", "beef", "salmon"]
​
var profiles = {
    chicken:{
        ingredients: ["onions","chicken"]
    },
    beef:{
        ingredients: ["beef", "garlic"]
    },
    fish:{
        ingredients: ["peppers", "fish"]
    },
}
​
​
var resultsArr = []
​
var array = testArray1
​
​
beefCount = 0
chickenCount = 0
fishCount = 0 
var count = 0;
for(var i = 0; i < array.length; ++i){
    if(array[i] == 'beef'){
        beefCount++;}
    if (array[i] == 'chicken'){
        chickenCount++;}
    if (array[i] == 'fish'){
        fishCount++;}
    
}
​
if(beefCount > chickenCount && beefCount > fishCount){
    console.log("beefCount wins!")
    console.log(profiles.beef.ingredients)
    fetchRecipes(profiles.beef.ingredients)
    currentprofile = profiles.beef
    GetDrink("tequila")
}
if(chickenCount > beefCount && chickenCount > fishCount){
    console.log("chickenCount wins!")
    fetchRecipes(profiles.chicken.ingredients)
    currentprofile = profiles.chicken
    GetDrink("rum")
}
if(fishCount > chickenCount && fishCount > beefCount){
    console.log("fishCount wins!")
    fetchRecipes(profiles.fish.ingredients)
    currentprofile = profiles.fish
}
​
​
​
​
function fetchRecipes(ingredients) {
    console.log("fetchRecipes()started")
    console.log(ingredients)
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
​
fetchRecipes(currentprofile.ingredients)
    .then(function(response){
       jsonResponse =  JSON.parse(response)
       console.log(jsonResponse)
       foodRandom = Math.floor(Math.random() * jsonResponse.results.length)
            console.log(jsonResponse.results[foodRandom])
            $("#foodImg").attr("src",jsonResponse.results[foodRandom].thumbnail);
            $("#foodTitle").text(jsonResponse.results[foodRandom].title);
             $("#foodLink").text(jsonResponse.results[foodRandom].ingredients);
​
      /*       var APIKey = "16049411-2343c269bd40939b11788f149";
    var foodName = jsonResponse.results[foodRandom].title
    var queryURL = "https://pixabay.com/api/?key=" + APIKey + "&q=" + foodName + "&image_type=photo";
    console.log(queryURL)
     $.ajax({
          url: queryURL,
          method: "GET"
          }).then(function(response) {
            console.log(response)
            console.log(response.hits[0].webformatURL)
            $("#foodImg").attr("src", response.hits[0].webformatURL)
        }); */
    })
​
function GetDrink(baseAlcohol){
    console.log("Start Function GetDrink()")
    //Cocktail API
 console.log(baseAlcohol)
    
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ baseAlcohol 
console.log(queryURL)
$.ajax({
  url: queryURL,
  crossDomain: true,
  method: "GET"
}).then(function(response) {
  console.log(response);
  DrinkRandom = Math.floor(Math.random() * response.drinks.length)
            console.log(response.drinks[DrinkRandom])
            $("#drinkImg").attr("src",response.drinks[DrinkRandom].strDrinkThumb);
            console.log(response.drinks[DrinkRandom].strDrinkThumb)
            $("#drinkTitle").text(response.drinks[DrinkRandom].strDrink);
            /* $("#cocktailLink").text(jsonResponse.drinks[DrinkRandom].href); */
            
}); 
​
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

