var array = [beef, chicken, tofu, veggies, vegan]

var beef = array[0]
var chicken = array[1]
var tofu = array[2]
var veggies = array[3]
var vegan = array[4]



function scoreY1(yes1) {
    beef--
    chicken--
    tofu++
    veggies++
    vegan++
}

function scoreN1(no1) {
    beef++
    chicken++
    tofu--
    veggies--
    vegan--
}

function scoreY2(yes2) {
    beef++
    chicken--
    tofu++
    veggies--
    vegan--
}

function scoreN2(no2) {
    beef--
    chicken--
    tofu++
    veggies++
    vegan--
}