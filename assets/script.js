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
        $(".cocktail-content").html("" + response.drinks[DrinkRandom].strIngredient1 + ": " + response.drinks[DrinkRandom].strMeasure1 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient2 + ": " + response.drinks[DrinkRandom].strMeasure2 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient3 + ": " + response.drinks[DrinkRandom].strMeasure3 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient4 + ": " + response.drinks[DrinkRandom].strMeasure4 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient5 + ": " + response.drinks[DrinkRandom].strMeasure5 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient6 + ": " + response.drinks[DrinkRandom].strMeasure6 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient7 + ": " + response.drinks[DrinkRandom].strMeasure7 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient8 + ": " + response.drinks[DrinkRandom].strMeasure8 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient9 + ": " + response.drinks[DrinkRandom].strMeasure9 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient10 + ": " + response.drinks[DrinkRandom].strMeasure10 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient11 + ": " + response.drinks[DrinkRandom].strMeasure11 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient12 + ": " + response.drinks[DrinkRandom].strMeasure12 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient13 + ": " + response.drinks[DrinkRandom].strMeasure13 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient14 + ": " + response.drinks[DrinkRandom].strMeasure14 + "<br>"
                                       + response.drinks[DrinkRandom].strIngredient15 + ": " + response.drinks[DrinkRandom].strMeasure15 + "<br>");
                                       if ($("<p>") !== null) {
                                       } else {
                                        $("<p>").addClass("hide")
                                       }
    });

}

$(".button1").click(function() {
    var otherButton = this.value == "Yes" ? "No" : "Yes";
    $(this).css({'background':'#0080FF', 'color':'white'});
    $(this).siblings(`.button1[value=${otherButton}]`).css({'background':'transparent', 'color':'#808080'});
    $(this).siblings(".answer").val(this.value);
  });
