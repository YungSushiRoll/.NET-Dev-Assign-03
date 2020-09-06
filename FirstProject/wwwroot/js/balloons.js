$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

// uncheck all checkboxes (FireFox)
$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
        $('#' + this.id + 'Img').addClass('animated bounceOutUp');
});

var animationArray = ["animated bounce", "animated flash", "animated pulse", "animated rubberBand",
    "animated shakeX", "animated shakeY", "animated headShake", "animated swing", "animated tada",
    "animated wobble", "animated jello", "animated heartBeat"];

var ranNum = (Math.floor(Math.random() * 12));
var animation;

var b1 = $('#red');
var b2 = $('#yellow');
var b3 = $('#teal');

function getRandomAnimation() {
    animation = animationArray[ranNum];
    return animation;
}

$(window).on('load', function() {
    $('#birthday-animation').addClass(getRandomAnimation());
    console.log(getRandomAnimation());
});

$('#submit').on('click',
    () => {
        if (b1.is(':checked') === false && b2.is(':checked') === false && b3.is(':checked') === false) {

            $('#toast').toast({ autohide: false }).toast('show');
        }
    });

$('#all').on('change',
    () => {
        var checkedAll = $('#all').prop("checked");

        b1.prop("checked", checkedAll);
        b1.change();

        b2.prop("checked", checkedAll);
        b2.change();

        b3.prop("checked", checkedAll);
        b3.change();
    });

$('.form-check-label').hover(function() {
    var color = $(this).attr('for');
    $('h1').css('color',color);
}, function() {
    $('h1').css('color', 'slategray');
})
