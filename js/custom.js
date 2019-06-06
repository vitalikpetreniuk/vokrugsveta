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

function tulips_show() {

    function random_tulip()
    {
        var random_tulip;

        // Image factory
        var createImage = function (src, title) {
            var img = new Image();
            img.src = src;
            img.alt = title;
            img.title = title;
            return img;
        };

        // array of images
        var images = [];

        // push two images to the array
        images.push(createImage("/img/tulips/1.png", "tulip"));
        images.push(createImage("/img/tulips/2.png", "tulip"));
        images.push(createImage("/img/tulips/3.png", "tulip"));
        images.push(createImage("/img/tulips/4.png", "tulip"));
        images.push(createImage("/img/tulips/5.png", "tulip"));

        // output
        random_tulip = images[Math.floor(Math.random()*images.length)];
        $('#wrapper.tulips').find('form button').html('<img src="'+random_tulip.src+'" alt="'+random_tulip.alt+'">');
    }
    function random_tulip_position()
    {
        var window_width = $(window).width();
        var window_height = $(window).height();

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        var left_random = getRandomArbitrary(0, window_width - 50);
        var top_random = getRandomArbitrary(0, window_height - 100);

        $('form button').css({'top': top_random, 'left': left_random});
    }

    function random_tulip_show()
    {

        if (typeof $.cookie('tulip') === 'undefined')
        {

            var chance = Math.floor(Math.random() * 2) + 1;

            if(chance === 2)
            {
                random_tulip();
                random_tulip_position();
                $('#wrapper.tulips').find('form button').show();
            }

            var date = new Date();
            date.setTime(date.getTime() + (30 * 1000));
            $.cookie('tulip', 'hide', { expires: date });
        }

    }

    random_tulip_show();
}

$(function(){

    if($('#wrapper.account').length)
    {
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

        //цепляем событие на onclick кнопки
        var promocode10 = document.getElementById('pc10-copy');
        promocode10.addEventListener('click', function () {
            //нашли наш контейнер
            var ta = document.getElementById('promocode10');
            //производим его выделение
            var range = document.createRange();
            range.selectNode(ta);
            window.getSelection().addRange(range);

            //пытаемся скопировать текст в буфер обмена
            try {
                document.execCommand('copy');
            } catch(err) {
                console.log('Can`t copy, boss');
            }
            //очистим выделение текста, чтобы пользователь "не парился"
            window.getSelection().removeAllRanges();
        });
        var promocode15 = document.getElementById('pc15-copy');
        promocode15.addEventListener('click', function () {
            //нашли наш контейнер
            var ta = document.getElementById('promocode15');
            //производим его выделение
            var range = document.createRange();
            range.selectNode(ta);
            window.getSelection().addRange(range);

            //пытаемся скопировать текст в буфер обмена
            try {
                document.execCommand('copy');
            } catch(err) {
                console.log('Can`t copy, boss');
            }
            //очистим выделение текста, чтобы пользователь "не парился"
            window.getSelection().removeAllRanges();
        });
        var promocode20 = document.getElementById('pc20-copy');
        promocode20.addEventListener('click', function () {
            //нашли наш контейнер
            var ta = document.getElementById('promocode20');
            //производим его выделение
            var range = document.createRange();
            range.selectNode(ta);
            window.getSelection().addRange(range);

            //пытаемся скопировать текст в буфер обмена
            try {
                document.execCommand('copy');
            } catch(err) {
                console.log('Can`t copy, boss');
            }
            //очистим выделение текста, чтобы пользователь "не парился"
            window.getSelection().removeAllRanges();
        });


    }



    tulips_show();
});