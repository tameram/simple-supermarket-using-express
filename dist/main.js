

let money = 500

$('#themoneydidhave').text(money)

const getPrice = function (nameOfFun = $('#inputNameforPrice').val()) {
   
    $.get(`priceCheck/${nameOfFun}`, function (_funPrice) {
        if (_funPrice.price < money && _funPrice.price != null) {
            $('body').append(`<div class="theDeatilsText">${_funPrice.price} you have a enough money yo buy`)
        }
        else if(_funPrice.price != null){
            $('body').append(`<div class="theDeatilsText">you dont have enough money`)
        }
        else{
            $('body').append(`<div class="theDeatilsText">we don't have this `)
        }
    })


}

const buy = function () {
    const nameOfFun = $('#inputNameforbuy').val()

    $.get(`buy/${nameOfFun}`, function (_funPrice) {
        if (_funPrice.price < money && _funPrice.price != null) {
        $('body').append(`<div class="theDeatilsText"> Congratulations, you’ve just bought ${_funPrice.name} for ${_funPrice.price}. There are ${_funPrice.inventory} left now in the store.</div>`)
        money -= _funPrice.price
        $('#themoneydidhave').text(money)
        }
        else if(_funPrice.price != null){
            $('body').append(`<div class="theDeatilsText">the user they should get a job`)
        }
        else{
            $('body').append(`<div class="theDeatilsText">we don't have this `)
        }
    })


}

