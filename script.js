var x = "chicken"

function CitySearch(x){
    console.log("Start City Search")
    var searchValue = $( "#SearchBox" ).val()
    console.log(searchValue)
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=" + searchValue,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "3eb55b5bc9mshcd18231da3d1013p112c4cjsn6acd3db0b1c9"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tasty.p.rapidapi.com/tags/list",
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