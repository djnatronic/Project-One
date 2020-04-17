var chosenIngredient;
var chosenAlcohol;

var foodArray = []
var beef = 0
var chicken = 0
var tofu = 0
var fish = 0


$("#resultsCalc").on("click", function () {
    for (var i = 0; i < foodArray.length; ++i) {
        if (foodArray[i] === 'beef') {
            beef++;
        }
        if (foodArray[i] === 'chicken') {
            chicken++;
        }
        if (foodArray[i] === 'fish') {
            fish++;
        }
        if (foodArray[i] === 'tofu') {
            tofu++;
        }
    }
    winnerPick();
    fetchRecipes([chosenIngredient])
        .then(function (response) {
            jsonResponse = JSON.parse(response)
            console.log(jsonResponse)
            foodRandom = Math.floor(Math.random() * jsonResponse.results.length)
            console.log(jsonResponse.results[foodRandom])
            $("#foodImg").attr("src", jsonResponse.results[foodRandom].thumbnail);
            $("#foodTitle").text(jsonResponse.results[foodRandom].title);
            $("#foodLink").text(jsonResponse.results[foodRandom].ingredients);
        })
    GetDrink()
})

function winnerPick() {
    if (beef > chicken && beef > fish && beef > tofu) {
        chosenIngredient = "beef"
        chosenAlcohol = "tequila"
    }
    else if (chicken > beef && chicken > fish && chicken > tofu) {
        chosenIngredient = "chicken"
        chosenAlcohol = "rum"
    }
    else if (fish > chicken && fish > beef && fish > tofu) {
        chosenIngredient = "fish"
        chosenAlcohol = "vodka"
    }
    else if (tofu > chicken && tofu > beef && tofu > fish) {
        chosenIngredient = "tofu"
        chosenAlcohol = "gin"
    }
    else {
        chosenIngredient = "chicken"
        chosenAlcohol = "rum"
    }
}

function score(food, number) {
    foodArray[number] = food
    console.log(foodArray)
}

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

function GetDrink(baseAlcohol) {
    console.log("Start Function GetDrink()")
    //Cocktail API
    baseAlcohol = baseAlcohol ? baseAlcohol : chosenAlcohol;
    console.log(baseAlcohol)

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + baseAlcohol
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        crossDomain: true,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        DrinkRandom = Math.floor(Math.random() * response.drinks.length)
        console.log(response.drinks[DrinkRandom])
        $("#drinkImg").attr("src", response.drinks[DrinkRandom].strDrinkThumb);
        console.log(response.drinks[DrinkRandom].strDrinkThumb)
        $("#drinkTitle").text(response.drinks[DrinkRandom].strDrink);
    });

}

$(".button1").click(function() {
    var otherButton = this.value == "Yes" ? "No" : "Yes";
    $(this).css({'background':'#0080FF', 'color':'white'});
    $(this).siblings(`.button1[value=${otherButton}]`).css({'background':'transparent', 'color':'#808080'});
    $(this).siblings(".answer").val(this.value);
  });
