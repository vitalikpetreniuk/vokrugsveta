function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

$(function(){

    var tulips = parseInt($('.account h1 .tulips-qua').text());
    var popup = $('.popup');

    $('.account h1').html('У вас <span class="tulips-qua">'+tulips+'</span> ' + getNoun(tulips, 'тюльпан', 'тюльпана', 'тюльпанов')+'!');
    if(tulips > 9)
    {
        $('button.exchange-tulips').show();
    }
    $('.account-buttons').css('opacity', 1);

    $('.exchange-tulips').on('click', function(){
        popup.fadeIn('fast');
    });
    popup.find('.close').on('click', function(){
        popup.fadeOut('fast');
    });
    popup.find('.no').on('click', function(){
        popup.fadeOut('fast');
    });

    //hide it when clicking anywhere else except the popup and the trigger
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.exchange-tulips')) {
            popup.fadeOut();
        }
    });

    // Stop propagation to prevent hiding "#tooltip" when clicking on it
    popup.on('click touch', function(event) {
        event.stopPropagation();
    });
});